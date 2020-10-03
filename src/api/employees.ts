import ky from 'ky';
import { employeesApiURL } from './hosts';

export type GetEmployeesResult = {
    results: {
        dob: {
            age: number;
        };
        name: {
            first: string;
            last: string;
        };
        login: {
            uuid: string;
        };
    }[];
};

export const getEmployees = async () => {
    const parsed: GetEmployeesResult = await ky
        .get(`${employeesApiURL}?inc=dob,name,login&results=50`)
        .json();

    return parsed;
};
