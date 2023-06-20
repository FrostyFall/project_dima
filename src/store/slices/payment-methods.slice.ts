import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPaymentMethod } from "src/interfaces/payment-method.interface";
import { IPaymentMethodsState } from "../interfaces/payment-methods.interface";

const InitialState: IPaymentMethodsState = {
  data: [],
};

export const paymentMethodsSlice = createSlice({
  name: "paymentMethods",
  initialState: InitialState,
  reducers: {
    setPaymentMethodsData: (
      state,
      { payload }: PayloadAction<IPaymentMethod[]>
    ) => {
      state.data = payload;
    },
  },
});

export default paymentMethodsSlice;
