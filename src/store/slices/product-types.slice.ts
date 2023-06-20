import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductTypesState } from "../interfaces/product-types.interface";
import { IProductType } from "src/interfaces/product-types.interface";

const InitialState: IProductTypesState = {
  data: [],
};

export const productTypesSlice = createSlice({
  name: "productTypes",
  initialState: InitialState,
  reducers: {
    setProductTypesData: (
      state,
      { payload }: PayloadAction<IProductType[]>
    ) => {
      state.data = payload;
    },
  },
});

export default productTypesSlice;
