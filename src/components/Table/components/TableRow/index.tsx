import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { Checkbox } from 'antd';

import { Employee } from 'types/employee';
import { State } from 'store/state';
import { employeesByIdSelector } from 'store/selectors/employees';

import { TableColumn } from '../../columns';
import { BaseRow } from '../BaseRow';
import { BaseCell } from '../BaseCell';

type TableRowOwnProps = {
    rowId: string;
    columnsOrder: TableColumn[];
    checked?: boolean;
};
type TabeRowStateProps = {
    rowData: Employee;
};
type TableRowProps = TableRowOwnProps & TabeRowStateProps;

const TableRowComponent = ({
    columnsOrder,
    rowData,
    checked,
}: TableRowProps) => (
    <BaseRow>
        <BaseCell>
            <Checkbox
                checked={checked}
                name={rowData.id}
                data-row-id={rowData.id}
            />
        </BaseCell>
        {columnsOrder.map(({ dataIndex }) => (
            <BaseCell key={dataIndex}>{rowData[dataIndex]}</BaseCell>
        ))}
    </BaseRow>
);

const mapStateToProps = createStructuredSelector<
    State,
    TableRowOwnProps,
    TabeRowStateProps
>({
    rowData: createSelector(
        employeesByIdSelector,
        (_: State, { rowId }: TableRowOwnProps) => rowId,
        (dataById, rowId) => dataById[rowId],
    ),
});
export const TableRow = connect(() => mapStateToProps)(TableRowComponent);
