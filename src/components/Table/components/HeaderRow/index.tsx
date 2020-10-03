import * as React from 'react';
import { Checkbox } from 'antd';
import cn from 'classnames';

import { TableColumn } from '../../columns';
import { BaseCell } from '../BaseCell';
import { BaseRow } from '../BaseRow';

type HeaderRowProps = {
    indetermined?: boolean;
    checked?: boolean;
    columnsOrder: TableColumn[];
};

export const everyRowId = 'every' as const;

export const HeaderRow = ({
    columnsOrder,
    indetermined,
    checked,
}: HeaderRowProps) => (
    <BaseRow>
        <BaseCell
            className={cn('table__cell_sticky_top', 'table__cell_heading')}
        >
            <Checkbox
                indeterminate={indetermined}
                checked={checked}
                name={everyRowId}
                data-row-id={everyRowId}
            />
        </BaseCell>
        {columnsOrder.map(({ title, dataIndex }) => (
            <BaseCell
                key={dataIndex}
                scope="col"
                className={cn('table__cell_sticky_top', 'table__cell_heading')}
            >
                {title}
            </BaseCell>
        ))}
    </BaseRow>
);
