import * as React from 'react';
import { useQueryClient } from 'react-query';

import { columns as columnsOrder } from './columns';
import { TableRow, HeaderRow, SummaryRow, everyRowId } from './components';

import './styles.css';

export const Table = () => {
    const queryClient = useQueryClient();
    const { order: rowsOrder = [] } = (queryClient.getQueryData('employees') ||
        {}) as any;
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
                {rowsOrder.map((rowId: string) => (
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
