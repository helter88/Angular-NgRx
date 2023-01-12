import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/products.interface';
import { getProductsSuccess } from './product.actions';

export const productFeatureKey = 'product';

export interface ProductState {
  products: Product[];
  error?: string;
}

export const initialState: ProductState = {
  products: [],
  error: undefined,
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(getProductsSuccess, (state, action) => ({
    ...state,
    products: action.response,
  }))
);
