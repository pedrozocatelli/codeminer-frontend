import * as Types from './types';

const INITIAL_STATE = {
  products: null,
  error: false,
  loading: {
    fetch: false,
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
      return { ...state, loading: { ...state.loading, [action.kind]: true } };
    case Types.GET_PRODUCTS:
      return { ...state, products: action.data };
    default:
      return state;
  }
};
