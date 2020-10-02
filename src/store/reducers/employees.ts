import { createReducer } from 'typesafe-actions';
import { EmployeesState } from 'store/state/employees';
import { toggleLoading, toggleError, setData } from 'store/actions/employees';

const initialState: EmployeesState = {
    loading: false,
    error: false,
    order: [],
    itemById: {},
};

export const employeesReducer = createReducer(initialState)
    .handleAction(toggleLoading, (state, { payload: loading }) => ({
        ...state,
        loading,
    }))
    .handleAction(toggleError, (state, { payload: error }) => ({
        ...state,
        error,
    }))
    .handleAction(setData, (state, { payload: { data } }) => ({
        ...state,
        order: data.map(({ id }) => id),
        itemById: data.reduce((acc, employee) => {
            acc[employee.id] = employee;
            return acc;
        }, {} as EmployeesState['itemById']),
    }));
