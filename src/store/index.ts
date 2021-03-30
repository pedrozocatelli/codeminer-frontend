/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducer';

import { ProductsState } from './products/types';

export interface StoreState {
  product: ProductsState;
}

const persistConfig = {
  key: 'fruit_store',
  storage,
};

const middlewares = [thunk];

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
    : compose(applyMiddleware(...middlewares));

const persistedReducer = persistReducer<any, any>(persistConfig, reducers);

const store = createStore(persistedReducer, composer);

const persistor = persistStore(store);

export { store, persistor };
