import { call, put, takeLatest } from 'redux-saga/effects';

import {
    fetchEmployees,
    toggleLoading,
    toggleError,
    setData,
} from 'store/actions/employees';

function* fetch(action: ReturnType<typeof fetchEmployees>) {
    try {
        yield put(toggleError(false));
        yield put(toggleLoading(true));
        //   const data = yield call(Api.fetchEmployees);
        // yeld put(setData(data));
        yield put(toggleLoading(false));
    } catch (e) {
        yield put(toggleError(true));
    }
}

export function* employeesSaga() {
    yield takeLatest(fetchEmployees, fetch);
}
