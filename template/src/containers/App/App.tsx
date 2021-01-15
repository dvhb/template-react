import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { routes } from '../../routes';
import { history, persistor, store } from '../../store';
import { Provider } from '../Provider';
import { PageContainer } from '../../pages';
import { DvhbUiProvider, GlobalStyle } from '../../theme';

type Props = {};

export const App: FC<Props> = () => (
  <DvhbUiProvider>
    <Provider store={store} history={history} persistor={persistor}>
      <GlobalStyle />
      <Switch>
        <Route private path={routes.index} exact>
          <Redirect to={routes.page} />
        </Route>
        <Route path={routes.page}>
          <PageContainer />
        </Route>
      </Switch>
    </Provider>
  </DvhbUiProvider>
);
