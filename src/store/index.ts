/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducer';

import { ProductsState } from './products/types';

export interface StoreState {
  products: ProductsState;
}

const middlewares = [thunk];

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
    : compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

export { store };
