import { createSelector } from 'reselect';
import { State } from 'store/state';

export const employeesSelector = ({ employees }: State) => employees;

export const employeesByIdSelector = createSelector(
    employeesSelector,
    ({ itemById }) => itemById,
);

export const employeesOrderSelector = createSelector(
    employeesSelector,
    ({ order }) => order,
);

export const employeesLoadingSelector = createSelector(
    employeesSelector,
    ({ loading }) => loading,
);

export const employeesErrorSelector = createSelector(
    employeesSelector,
    ({ error }) => error,
);
