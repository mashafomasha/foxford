import { call, put, takeLatest } from 'redux-saga/effects';
import { getEmployees, GetEmployeesResult } from 'api/employees';

import {
    fetchEmployees,
    toggleLoading,
    toggleError,
    setData,
} from 'store/slices/employees';

function* fetch(action: ReturnType<typeof fetchEmployees>) {
    try {
        yield put(toggleError(false));
        yield put(toggleLoading(true));

        const data: GetEmployeesResult = yield call(getEmployees);
        yield put(setData(data));

        yield put(toggleLoading(false));
    } catch (e) {
        yield put(toggleLoading(false));
        yield put(toggleError(true));
    }
}

export function* employeesSaga() {
    yield takeLatest(fetchEmployees, fetch);
}
