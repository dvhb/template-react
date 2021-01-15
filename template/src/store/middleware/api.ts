import { Middleware } from './types';

export const apiMiddleware: Middleware = ({ dispatch, getState }) => (next) => async (action) => {
  next(action);
};
