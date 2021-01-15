import { MiddlewareAPI, Dispatch } from 'redux';
import { RootAction } from '../actions';
import { RootState } from '../reducers';

export type Middleware = {
  (api: MiddlewareAPI<Dispatch<RootAction>, RootState>): (
    next: Dispatch<RootAction>,
  ) => <A extends RootAction>(action: A) => any;
};
