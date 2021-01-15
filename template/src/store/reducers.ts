import { StateType } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { PersistConfig } from 'redux-persist/es/types';

import { history } from './history';
import { runtimeReducer } from './runtime/reducers';

const persistConfig: PersistConfig<any> = {
  storage,
  key: 'root',
  blacklist: ['auth'],
  version: 0,
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    router: connectRouter(history),
    runtime: runtimeReducer,
  }),
);

export type RootState = StateType<typeof rootReducer>;
