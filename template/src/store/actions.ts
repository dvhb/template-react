import { ActionType } from 'typesafe-actions';
import { routerActions } from 'connected-react-router';

import * as runtimeActions from './runtime/actions';

export const actions = {
  router: routerActions,
  runtime: runtimeActions,
};

export type RootAction = ActionType<typeof actions>;
