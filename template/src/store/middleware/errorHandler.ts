// import { store } from '..';
// import { logout } from '../auth/actions';

export const errorHandler = (callback: (res: any) => void) => async (res: any) => {
  console.error(res);
  if (res.status === 401) {
    // store.dispatch(logout());
  }
  callback(res);
};
