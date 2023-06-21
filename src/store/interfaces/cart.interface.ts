import { IProduct } from "src/interfaces/product.interface";

export interface ICartState {
  products: {
    data: IProduct;
    amount: number;
  }[];
}
