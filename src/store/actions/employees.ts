import { createAction } from 'typesafe-actions';
import { GetEmployeesResult } from 'api/employees';

export const fetchEmployees = createAction('employees/fetchEmployees')();

export const toggleLoading = createAction('employees/toggleLoading')<boolean>();

export const toggleError = createAction('employees/toggleError')<boolean>();

export const setData = createAction('employees/setData')<GetEmployeesResult>();
