import { createReducer } from 'typesafe-actions';
import { appOpened } from './actions';

const initialState = {
  opened: false,
};

export const runtimeReducer = createReducer(initialState).handleAction(appOpened, (state) => {
  return { ...state, opened: true };
});
