import type { IProduct } from './product';

export interface ICart {
  id: number;
  idProduct: number;
  product: IProduct;
  qty: number;
  subtotal: number;
}
