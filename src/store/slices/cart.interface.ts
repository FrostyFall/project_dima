import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFiltersState } from "../interfaces/filters.interface";
import { ICartState } from "../interfaces/cart.interface";
import { IProduct } from "src/interfaces/product.interface";

const InitialState: ICartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: InitialState,
  reducers: {
    addToCart: (
      state,
      { payload }: PayloadAction<{ data: IProduct; amount: number }>
    ) => {
      const foundProduct = state.products.find(
        (product) =>
          product.data.id === payload.data.id &&
          product.data.companyId === payload.data.companyId
      );

      if (foundProduct) {
        foundProduct.amount += payload.amount;
      } else {
        state.products.push({
          data: payload.data,
          amount: payload.amount,
        });
      }

      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    resetCart: (state, { payload }: PayloadAction<{ companyId: number }>) => {
      state.products = state.products.filter(
        (product) => product.data.companyId !== payload.companyId
      );

      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    setCart: (state) => {
      const lcProducts = localStorage.getItem("cartProducts");
      if (lcProducts) {
        const lcProductsObj = JSON.parse(lcProducts);
        state.products = lcProductsObj;
      }
    },
  },
});

export default cartSlice;
