import { createAction, props } from '@ngrx/store';
import { ResponseProducts } from '../models/products.interface';

export const getProducts = createAction('[Product Actions] Get Products');

export const getProductsSuccess = createAction(
  '[Product Actions] Get Products Success',
  props<{ response: ResponseProducts }>()
);
export const getProductsFail = createAction(
  '[Product Actions] Get Products Fail',
  props<{ error: string }>()
);
