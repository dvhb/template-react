import React, { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

type ProviderProps = {
  children: ReactNode;
  store: any;
  history: any;
};

export const Provider = ({ children, store, history }: ProviderProps) => (
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>{children}</ConnectedRouter>
  </ReduxProvider>
);
