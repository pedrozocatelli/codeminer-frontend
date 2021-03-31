/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState, store } from 'store';

import api from 'services/api';
import * as Types from './types';

const fruitsImages: Record<number, string> = {
  1: 'https://www.jasminealimentos.com/wp-content/uploads/2017/11/banana-860x485.jpg',
  2: 'https://dailydeliverymart.com/wp-content/uploads/2021/01/photo-1567306226416-28f0efdc88ce.jpg',
  3: 'https://www.rd.com/wp-content/uploads/2017/12/01_oranges_Finally%E2%80%94Here%E2%80%99s-Which-%E2%80%9COrange%E2%80%9D-Came-First-the-Color-or-the-Fruit_691064353_Lucky-Business.jpg?resize=760,506',
  4: 'https://static.portaldacidade.com/unsafe/610x407/https://s3.amazonaws.com/lucasdorioverde.portaldacidade.com/img/news/2019-12/conheca-os-beneficios-da-manga-a-fruta-da-estacao-5dfb6f5faab3c.jpg',
  5: 'https://image.sciencenorway.no/1438480.jpg?imageId=1438480&width=1058&height=604',
};

export const getProducts = (): ThunkAction<
  void,
  StoreState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch({ type: Types.START_FETCH, kind: 'fetchProducts' });

    const result = await api.get(`products.json`);

    const data = result.data.products.map((product: Record<string, any>) => {
      return {
        ...product,
        image: fruitsImages[product.id] || fruitsImages[5],
      };
    });

    dispatch({ type: Types.GET_PRODUCTS, data });
    dispatch({ type: Types.DONE_FETCH, kind: 'fetchProducts' });
    dispatch({ type: Types.SET_ERROR, error: 'products', data: false });
  } catch {
    dispatch(getProducts());
  }
};

export const getVouchers = (): ThunkAction<
  void,
  StoreState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch({ type: Types.START_FETCH, kind: 'fetchVouchers' });

    const result = await api.get(`vouchers.json`);

    dispatch({ type: Types.GET_VOUCHERS, data: result.data.vouchers });
    dispatch({ type: Types.DONE_FETCH, kind: 'fetchVouchers' });
    dispatch({ type: Types.SET_ERROR, error: 'vouchers', data: false });
  } catch {
    dispatch(getVouchers());
  }
};

export const updateProducts = (
  id: number,
  quantity: number,
): ThunkAction<void, StoreState, unknown, Action<string>> => async (
  dispatch,
) => {
  try {
    const state = store.getState() as StoreState;
    const { products } = state.products;

    const data = products?.map((product) =>
      product.id === id
        ? { ...product, available: product.available - quantity }
        : product,
    );

    dispatch({ type: Types.GET_PRODUCTS, data });
  } catch {
    dispatch({ type: Types.SET_ERROR, error: 'products', data: true });
  }
};

export const addToCart = (
  data: Record<string, any>,
): ThunkAction<void, StoreState, unknown, Action<string>> => async (
  dispatch,
) => {
  try {
    const state = store.getState() as StoreState;
    const { cart } = state.products;

    let newCart: Record<string, any>[] = [];

    if (cart) {
      newCart = cart;
    }

    const newItem = {
      id: data.id,
      name: data.name,
      price: data.price,
      quantity: 1,
      max: data.available,
      image: data.image,
    };

    newCart.push(newItem);

    dispatch({ type: Types.ADD_CART, data: newCart });
  } catch {
    dispatch({ type: Types.SET_ERROR, error: 'vouchers', data: true });
  }
};

export const updateCart = (
  id: number,
  quantity: number,
): ThunkAction<void, StoreState, unknown, Action<string>> => async (
  dispatch,
) => {
  try {
    const state = store.getState() as StoreState;
    const { cart } = state.products;

    if (!cart) {
      return;
    }

    const data = cart?.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - quantity } : item,
    );

    dispatch({ type: Types.ADD_CART, data });
  } catch {
    dispatch({ type: Types.SET_ERROR, error: 'products', data: true });
  }
};

export const removeFromCart = (
  id: number,
): ThunkAction<void, StoreState, unknown, Action<string>> => async (
  dispatch,
) => {
  try {
    const state = store.getState() as StoreState;
    const { cart } = state.products;

    if (!cart) {
      return;
    }

    const replenishQuantity = cart.find((a) => a.id === id)?.quantity || 0;

    dispatch(updateProducts(id, -replenishQuantity));
    const filteredArray = cart.filter((a) => a.id !== id);
    const newArray = filteredArray.length > 0 ? filteredArray : null;

    dispatch({ type: Types.ADD_CART, data: newArray });
  } catch {
    dispatch({ type: Types.SET_ERROR, error: 'vouchers', data: true });
  }
};

export const setError = (
  data: string,
): ThunkAction<void, StoreState, unknown, Action<string>> => async (
  dispatch,
) => {
  dispatch({ type: Types.SET_ERROR, error: data, data: false });
};
