import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICompaniesState } from "../interfaces/companies.interface";
import { ICompany } from "src/interfaces/company.interface";
import { IAuthState } from "../interfaces/auth.interface";

const InitialState: IAuthState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: InitialState,
  reducers: {
    setIsAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
  },
});

export default authSlice;
