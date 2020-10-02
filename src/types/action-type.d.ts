import { ActionType } from 'typesafe-actions';
import * as employeesActions from 'store/actions/employees';

export type RootAction = ActionType<typeof employeesActions>;

declare module 'typesafe-actions' {
    interface Types {
        RootAction: RootAction;
    }
}
