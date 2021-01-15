import { RootAction } from './actions';
import { RootState } from './reducers';

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
    RootState: RootState;
  }
}
