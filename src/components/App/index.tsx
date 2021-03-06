import * as React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'store/index';
import { Page } from '../Page';

const store = configureStore();

export const App = () => (
    <Provider store={store}>
        <Page />
    </Provider>
);
