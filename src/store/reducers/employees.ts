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
    .handleAction(setData, (state, { payload: { results } }) => ({
        ...state,
        order: results.map(({ login: { uuid: id } }) => id),
        itemById: results.reduce((acc, employee) => {
            const {
                name: { first: name, last: surname },
                login: { uuid: id },
                dob: { age },
            } = employee;

            acc[id] = {
                name,
                surname,
                id,
                age,
            };

            return acc;
        }, {} as EmployeesState['itemById']),
    }));
