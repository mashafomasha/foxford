import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnly';
import createSagaMiddleware from 'redux-saga';

import employeesReducer from './slices/employees';
import { employeesSaga } from './sagas/employees';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});

let store = configureStore({
    reducer: {
        employees: employeesReducer,
    },
    enhancers: [composeEnhancers(applyMiddleware(sagaMiddleware))],
});

sagaMiddleware.run(employeesSaga);

export const getStore = () => store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
