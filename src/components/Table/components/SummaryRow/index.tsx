import * as React from 'react';
import cn from 'classnames';

import { BaseRow } from '../BaseRow';
import { BaseCell } from '../BaseCell';
import { useQueryClient } from 'react-query';

type SummaryRowProps = {
    colSpan: number;
    selected: string[];
};

export const SummaryRow = ({ colSpan, selected }: SummaryRowProps) => {
    const queryClient = useQueryClient();
    const { itemById = {} } = (queryClient.getQueryData('employees') ||
        {}) as any;
    const selectedNames = selected
        .map((id) => itemById[id]?.name)
        .filter(Boolean);

    return (
        <BaseRow>
            <BaseCell
                className={cn(
                    'table__cell_summary',
                    'table__cell_sticky_bottom',
                )}
            >
                Пользователи:
            </BaseCell>
            <BaseCell
                className={cn(
                    'table__cell_summary',
                    'table__cell_sticky_bottom',
                )}
                colSpan={colSpan}
            >
                {selectedNames.join(', ') || '≧☉_☉≦'}
            </BaseCell>
        </BaseRow>
    );
};
