import * as React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

import { State } from 'store/state';
import { employeesByIdSelector } from 'store/selectors/employees';

import { BaseRow } from '../BaseRow';
import { BaseCell } from '../BaseCell';

type SummaryRowOwnProps = {
    colSpan: number;
    selected: string[];
};
type SummaryRowStateProps = {
    selectedNames: string[];
};
type SummaryRowProps = SummaryRowOwnProps & SummaryRowStateProps;

const SummaryRowComponent = ({ colSpan, selectedNames }: SummaryRowProps) => (
    <BaseRow>
        <BaseCell
            className={cn('table__cell_summary', 'table__cell_sticky_bottom')}
        >
            Пользователи:
        </BaseCell>
        <BaseCell
            className={cn('table__cell_summary', 'table__cell_sticky_bottom')}
            colSpan={colSpan}
        >
            {selectedNames.join(', ') || '≧☉_☉≦'}
        </BaseCell>
    </BaseRow>
);

const mapStateToProps = createStructuredSelector<
    State,
    SummaryRowOwnProps,
    SummaryRowStateProps
>({
    selectedNames: createSelector(
        employeesByIdSelector,
        (_: State, { selected }: SummaryRowOwnProps) => selected,
        (dataById, selected) =>
            selected.map((id) => dataById[id]?.name).filter(Boolean),
    ),
});

export const SummaryRow = connect(mapStateToProps)(SummaryRowComponent);
