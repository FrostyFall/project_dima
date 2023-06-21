import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalsState } from "../interfaces/modals.interface";
import { IProduct } from "src/interfaces/product.interface";

const InitialState: IModalsState = {
  isFiltersModalOpen: false,
  isProductModalOpen: false,
  productModalData: null,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState: InitialState,
  reducers: {
    toggleFiltersModal: (state, { payload }: PayloadAction<boolean>) => {
      state.isFiltersModalOpen = payload;
    },
    toggleProductModal: (state, { payload }: PayloadAction<boolean>) => {
      state.isProductModalOpen = payload;
    },
    setProductData: (state, { payload }: PayloadAction<IProduct>) => {
      state.productModalData = payload;
    },
  },
});

export default modalsSlice;
