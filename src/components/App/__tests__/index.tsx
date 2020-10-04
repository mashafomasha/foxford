import React from 'react';
import { render } from '@testing-library/react';
import { App } from '..';

test('renders header', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/Список сотрудников/i);
    expect(headerElement).toBeInTheDocument();
});
