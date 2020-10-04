import { GetEmployeesResult } from '../employees';

const mock: GetEmployeesResult = {
    results: [
        {
            dob: { age: 35 },
            login: { uuid: 'b9281d7f-6828-4485-86b9-81ccb299425a' },
            name: { first: 'Nalan', last: 'Kuzucu' },
        },
        {
            dob: { age: 69 },
            login: { uuid: '2ae4cdf3-7641-4346-ab0b-608c28a87853' },
            name: { first: 'Emile', last: 'Jean-Baptiste' },
        },
        {
            dob: { age: 27 },
            login: { uuid: '13a6b26d-8307-4970-980d-912d5da6729a' },
            name: { first: 'Mercedes', last: 'Herrero' },
        },
    ],
};

export const getEmployees = async () => mock;
