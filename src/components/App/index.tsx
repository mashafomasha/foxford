import * as React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'store/index';

const store = configureStore();

export const App = () => (
    <Provider store={store}>
        <main className="page">
            <h2 className="page__header">Список сотрудников</h2>

            <section className="page__table"></section>
        </main>
    </Provider>
);
