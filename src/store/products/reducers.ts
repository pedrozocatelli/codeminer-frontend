import * as Types from './types';

const INITIAL_STATE = {
  products: null,
  vouchers: null,
  cart: null,
  error: {
    products: false,
    vouchers: false,
  },
  loading: {
    fetchProducts: false,
    fetchVouchers: false,
  },
};

export default (
  state = INITIAL_STATE,
  action: Types.ProductActionTypes,
): Types.ProductsState => {
  switch (action.type) {
    case Types.START_FETCH:
      return { ...state, loading: { ...state.loading, [action.kind]: true } };
    case Types.DONE_FETCH:
      return { ...state, loading: { ...state.loading, [action.kind]: false } };
    case Types.GET_PRODUCTS:
      return { ...state, products: action.data };
    case Types.GET_VOUCHERS:
      return { ...state, vouchers: action.data };
    case Types.ADD_CART:
      return { ...state, cart: action.data };
    case Types.SET_ERROR:
      return {
        ...state,
        error: { ...state.error, [action.error]: action.data },
      };
    default:
      return state;
  }
};
