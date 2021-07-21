import * as React from 'react';
import { Checkbox } from 'antd';
import cn from 'classnames';

import { TableColumn } from '../../columns';
import { BaseRow } from '../BaseRow';
import { BaseCell } from '../BaseCell';
import { useQueryClient } from 'react-query';

type TableRowProps = {
    rowId: string;
    columnsOrder: TableColumn[];
    checked?: boolean;
};

export const TableRow = ({ columnsOrder, checked, rowId }: TableRowProps) => {
    const queryClient = useQueryClient();
    const { itemById = {} } = (queryClient.getQueryData('employees') ||
        {}) as any;
    const rowData = itemById[rowId];

    return (
        <BaseRow className={cn({ table__row_selected: checked })}>
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
};
