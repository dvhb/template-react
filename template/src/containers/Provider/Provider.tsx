import React, { FC, ReactNode, useCallback } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import { api } from '../../services/api';

type ProviderProps = {
  children: ReactNode;
  store: any;
  history: any;
  persistor: any;
};

export const Provider: FC<ProviderProps> = ({ children, store, history, persistor }) => {
  const onBeforeLift = useCallback(() => {
    api.init();
  }, []);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor} onBeforeLift={onBeforeLift}>
        <ConnectedRouter history={history}>{children}</ConnectedRouter>
      </PersistGate>
    </ReduxProvider>
  );
};
