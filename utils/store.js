import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native'

// import logger from 'redux-logger';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from 'reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'me',
    'accessToken',
    'categories',
  ],
}

const persistedReducers = persistReducer(persistConfig, reducers)

const middlewares = [
  thunk,
  promise,
];

export default () => {
  let store = createStore(
    persistedReducers,
    {},
    composeWithDevTools(applyMiddleware(
      ...middlewares
    )),
  )
  let persistor = persistStore(store)
  return { store, persistor }
}
