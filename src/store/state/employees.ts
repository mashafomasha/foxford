import { Employee } from 'types/employee';

export type EmployeesState = {
    loading: boolean;
    error: boolean;
    order: string[];
    itemById: {
        [id: string]: Employee;
    };
};
