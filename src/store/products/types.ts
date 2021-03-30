export const START_FETCH = '@products/START_FETCH';
export const DONE_FETCH = '@products/DONE_FETCH';
export const GET_PRODUCTS = '@products/GET_PRODUCTS';
export const SET_ERROR = '@products/SET_ERROR';

interface ProductData {
  id: string;
  name: string;
  price: number;
  available: number;
}

interface Product {
  data: ProductData[];
}

export interface ProductsState {
  readonly products: Product | null;
  readonly error: boolean;
  readonly loading: {
    fetch: boolean;
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
  data: Product;
}

interface SetError {
  type: typeof SET_ERROR;
  data: boolean;
}

export type ProductActionTypes =
  | StartFetch
  | DoneFetch
  | GetProducts
  | SetError;
// | SetError;
