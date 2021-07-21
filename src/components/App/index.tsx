import * as React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import { configureStore } from 'store/index';

import { Page } from '../Page';

const store = configureStore();

const queryClient = new QueryClient();

export const App = () => (
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <Page />
        </Provider>
    </QueryClientProvider>
);
