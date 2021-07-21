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
    const { results }: GetEmployeesResult = await ky
        .get(`${employeesApiURL}?inc=dob,name,login&results=50`)
        .json();

    const order = results.map(({ login: { uuid: id } }) => id);
    const itemById = results.reduce((acc, employee) => {
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
    }, {} as any);

    return {
        order,
        itemById,
    };
};
