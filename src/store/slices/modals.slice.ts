import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalsState } from "../interfaces/modals.interface";

const InitialState: IModalsState = {
  isFiltersModalOpen: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState: InitialState,
  reducers: {
    toggleFiltersModal: (state, { payload }: PayloadAction<boolean>) => {
      state.isFiltersModalOpen = payload;
    },
  },
});

export default modalsSlice;
