import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICompaniesState } from "../interfaces/companies.interface";
import { ICompany } from "src/interfaces/company.interface";

const InitialState: ICompaniesState = {
  initialData: [],
  data: [],
  selectedCompany: null,
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState: InitialState,
  reducers: {
    setCompaniesData: (state, { payload }: PayloadAction<ICompany[]>) => {
      state.data = payload;
    },
    setCompaniesInitialData: (
      state,
      { payload }: PayloadAction<ICompany[]>
    ) => {
      state.initialData = [...payload];
      state.data = [...payload];
    },
    setSelectedCompany: (state, { payload }: PayloadAction<ICompany>) => {
      state.selectedCompany = payload;
    },
    resetSelectedCompany: (state) => {
      state.selectedCompany = null;
    },
  },
});

export default companiesSlice;
