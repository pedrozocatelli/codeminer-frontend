/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'store';

import { toast } from 'react-toastify';

import api from 'services/api';
import * as Types from './types';

export const getProducts = (): ThunkAction<
  void,
  StoreState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch({ type: Types.START_FETCH, kind: 'fetch' });

    const result = await api.get(`products.json`);

    dispatch({ type: Types.GET_PRODUCTS, data: result.data.products });
    dispatch({ type: Types.DONE_FETCH, kind: 'fetch' });
  } catch {
    toast.error('Erro while fetching products');
    dispatch({ type: Types.SET_ERROR, data: true });
  }
};
