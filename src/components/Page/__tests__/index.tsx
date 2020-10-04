import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import { configureStore } from 'store/index';
import { Page } from '..';
import { everyRowId } from 'components/Table/components';

const store = configureStore();

jest.mock('api/employees');

test('renders table', async () => {
    const { getByText } = render(<Provider store={store}>{<Page />}</Provider>);

    const loadingText = getByText(/Данные загружаются/i);
    expect(loadingText).toBeInTheDocument();

    await waitFor(() => screen.getByRole('table'));

    const NalanRow = getByText(/Nalan/i);
    expect(NalanRow).toBeInTheDocument();

    const EmileRow = getByText(/Emile/i);
    expect(EmileRow).toBeInTheDocument();

    const MercedesRow = getByText(/Mercedes/i);
    expect(MercedesRow).toBeInTheDocument();
});

test('renders summary row', async () => {
    render(<Provider store={store}>{<Page />}</Provider>);

    await waitFor(() => screen.getByRole('table'));

    const table = screen.getByRole('table');
    const summaryCell = table.querySelectorAll('.table__cell_summary')[1];
    expect(summaryCell).toBeInTheDocument();

    const everyCheckbox = screen
        .getAllByRole('checkbox')
        .find((element) => element.dataset.rowId === everyRowId);
    expect(everyCheckbox).toBeInTheDocument();
    expect(everyCheckbox?.parentNode).not.toHaveClass('ant-checkbox-checked');
    expect(summaryCell).toHaveTextContent('≧☉_☉≦');

    fireEvent.click(everyCheckbox!);
    expect(everyCheckbox?.parentNode).toHaveClass('ant-checkbox-checked');
    expect(summaryCell).toHaveTextContent('Nalan, Emile, Mercedes');

    fireEvent.click(everyCheckbox!);
    expect(everyCheckbox?.parentNode).not.toHaveClass('ant-checkbox-checked');
    expect(summaryCell).toHaveTextContent('≧☉_☉≦');

    const firstRowCheckbox = screen.getAllByRole('checkbox')[1];
    expect(firstRowCheckbox?.parentNode).not.toHaveClass(
        'ant-checkbox-checked',
    );
    fireEvent.click(firstRowCheckbox!);
    expect(firstRowCheckbox?.parentNode).toHaveClass('ant-checkbox-checked');
    expect(summaryCell).toHaveTextContent('Nalan');
});
