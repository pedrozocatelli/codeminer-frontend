export const START_FETCH = '@products/START_FETCH';
export const DONE_FETCH = '@products/DONE_FETCH';
export const GET_PRODUCTS = '@products/GET_PRODUCTS';
export const GET_VOUCHERS = '@products/GET_VOUCHERS';
export const ADD_CART = '@products/ADD_CART';
export const SET_ERROR = '@products/SET_ERROR';

interface Product {
  id: number;
  name: string;
  price: number;
  available: number;
  image: string;
}

interface VoucherData {
  id: number;
  code: string;
  type: string;
  amount: number;
  minValue: number;
}

interface Voucher {
  data: VoucherData[];
}

export interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ProductsState {
  readonly products: Product[] | null;
  readonly vouchers: Voucher | null;
  readonly cart: Cart[] | [];

  readonly error: {
    products: boolean;
    vouchers: boolean;
  };
  readonly loading: {
    fetchProducts: boolean;
    fetchVouchers: boolean;
  };
}

interface StartFetch {
  type: typeof START_FETCH;
  kind: string;
}

interface DoneFetch {
  type: typeof DONE_FETCH;
  kind: string;
}

interface GetProducts {
  type: typeof GET_PRODUCTS;
  data: Product[];
}

interface AddCart {
  type: typeof ADD_CART;
  data: Cart;
}

interface GetVouchers {
  type: typeof GET_VOUCHERS;
  data: Voucher;
}

interface SetError {
  type: typeof SET_ERROR;
  error: string;
  data: boolean;
}

export type ProductActionTypes =
  | StartFetch
  | DoneFetch
  | GetProducts
  | GetVouchers
  | AddCart
  | SetError;
