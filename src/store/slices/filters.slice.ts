import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFiltersState } from "../interfaces/filters.interface";

const InitialState: IFiltersState = {
  selectedProductTypeId: -1,
  formSelectedPTypeId: -1,
  selectedPaymentMethods: [],
  formPaymentMethods: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: InitialState,
  reducers: {
    setSelectedProductTypeId: (state, { payload }: PayloadAction<number>) => {
      state.selectedProductTypeId = payload;
    },
    setFormSelectedPTypeId: (state, { payload }: PayloadAction<number>) => {
      state.formSelectedPTypeId = payload;
    },
    setSelectedPaymentMethods: (state, { payload }: PayloadAction<number>) => {
      if (state.selectedPaymentMethods.includes(payload)) {
        const index = state.selectedPaymentMethods.findIndex(
          (method) => method === payload
        );
        state.selectedPaymentMethods.splice(index, 1);
      } else {
        state.selectedPaymentMethods.push(payload);
      }
    },
    setFormPaymentMethods: (state, { payload }: PayloadAction<number>) => {
      if (state.formPaymentMethods.includes(payload)) {
        const index = state.formPaymentMethods.findIndex(
          (method) => method === payload
        );
        state.formPaymentMethods.splice(index, 1);
      } else {
        state.formPaymentMethods.push(payload);
      }
    },
    setFullFormPaymentMethods: (
      state,
      { payload }: PayloadAction<number[]>
    ) => {
      state.formPaymentMethods = payload;
    },
    setFullSelectedPaymentMethods: (
      state,
      { payload }: PayloadAction<number[]>
    ) => {
      state.selectedPaymentMethods = payload;
    },

    resetSelectedProductTypeIds: (state) => {
      state.formSelectedPTypeId = -1;
      state.selectedProductTypeId = -1;
    },
  },
});

export default filtersSlice;
