import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { persistStore } from 'redux-persist';

import { history } from './history';
import { rootReducer } from './reducers';
import { apiMiddleware } from './middleware/api';

const composeEnhancers = composeWithDevTools({
  maxAge: 550,
  trace: true,
  traceLimit: 25,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(apiMiddleware, routerMiddleware(history))));

const persistor = persistStore(store);

export { history, persistor, store };
