import * as React from 'react';
import { Provider } from 'react-redux';
import { getStore } from 'store/index';
import { Page } from '../Page';

const store = getStore();

export const App = () => (
    <Provider store={store}>
        <Page />
    </Provider>
);
