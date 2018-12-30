import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import reducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}
middlewares.push(sagaMiddleware);

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
