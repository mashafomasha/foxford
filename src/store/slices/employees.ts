import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetEmployeesResult } from 'api/employees';
import { EmployeesState } from 'store/state/employees';

const initialState: EmployeesState = {
    loading: false,
    error: false,
    order: [],
    itemById: {},
};

export const employeesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        fetchEmployees: (state) => state,
        toggleLoading: (state, { payload: loading }) => ({
            ...state,
            loading,
        }),
        toggleError: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        setData: (
            state,
            { payload: { results } }: PayloadAction<GetEmployeesResult>,
        ) => ({
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
        }),
    },
});

// Action creators are generated for each case reducer function
export const { toggleLoading, toggleError, setData, fetchEmployees } =
    employeesSlice.actions;

export default employeesSlice.reducer;
