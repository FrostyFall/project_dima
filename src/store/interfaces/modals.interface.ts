import { IProduct } from "src/interfaces/product.interface";

export interface IModalsState {
  isFiltersModalOpen: boolean;
  isProductModalOpen: boolean;
  productModalData: IProduct | null;
}
