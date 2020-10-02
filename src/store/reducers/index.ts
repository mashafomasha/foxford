import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import { State } from 'store/state';
import { employeesReducer } from './employees';

export const rootReducer = combineReducers<State>({
    employees: employeesReducer,
});

export type RootState = StateType<typeof rootReducer>;
