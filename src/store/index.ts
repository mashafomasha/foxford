import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnly';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers';
import { employeesSaga } from './sagas/employees';

let store: ReturnType<typeof configureStore> | undefined;

export const getStore = () => store;

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = composeWithDevTools({});

    const resultStore = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware)),
    );

    sagaMiddleware.run(employeesSaga);

    store = resultStore;

    return resultStore;
};
