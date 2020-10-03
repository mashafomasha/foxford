import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { employeesOrderSelector } from 'store/selectors/employees';
import { State } from 'store/state';

import { columns, TableColumn } from './columns';
import { TableRow, HeaderRow, SummaryRow, everyRowId } from './components';

import './styles.css';

type TableProps = {
    columnsOrder: TableColumn[];
    rowsOrder: string[];
};

const TableComponent = ({ columnsOrder, rowsOrder }: TableProps) => {
    const [selected, setSelected] = React.useState<string[]>([]);

    const handleClick = (event: React.MouseEvent) => {
        const target = event.target as any;
        const { tagName, dataset } = target;

        if (tagName !== 'INPUT') {
            return;
        }

        const rowId = dataset.rowId;
        if (rowId === everyRowId) {
            return handleClickEvery();
        }

        return handleClickRow(rowId);
    };

    const handleClickEvery = () => {
        setSelected(selected.length !== rowsOrder.length ? [...rowsOrder] : []);
    };

    const handleClickRow = (rowId: string) => {
        const idx = selected.indexOf(rowId);

        if (idx !== -1) {
            const without = [...selected];
            without.splice(idx, 1);
            return setSelected(without);
        }

        setSelected([...selected, rowId]);
    };

    return (
        <table className="table" onClick={handleClick}>
            <thead>
                <HeaderRow
                    indetermined={
                        selected.length !== 0 &&
                        selected.length !== rowsOrder.length
                    }
                    checked={selected.length === rowsOrder.length}
                    columnsOrder={columnsOrder}
                />
            </thead>
            <tbody>
                {rowsOrder.map((rowId) => (
                    <TableRow
                        key={rowId}
                        rowId={rowId}
                        columnsOrder={columnsOrder}
                        checked={selected.includes(rowId)}
                    />
                ))}
            </tbody>
            <tfoot>
                <SummaryRow colSpan={columnsOrder.length} selected={selected} />
            </tfoot>
        </table>
    );
};

const mapStateToProps = createStructuredSelector<State, TableProps>({
    columnsOrder: () => columns,
    rowsOrder: employeesOrderSelector,
});
export const Table = connect(mapStateToProps)(TableComponent);
