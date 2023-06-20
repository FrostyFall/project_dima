import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./slices/modals.slice";
import companiesSlice from "./slices/companies.slice";
import productTypesSlice from "./slices/product-types.slice";
import filtersSlice from "./slices/filters.slice";
import paymentMethodsSlice from "./slices/payment-methods.slice";

const store = configureStore({
  reducer: {
    modals: modalsSlice.reducer,
    companies: companiesSlice.reducer,
    productTypes: productTypesSlice.reducer,
    filters: filtersSlice.reducer,
    paymentMethods: paymentMethodsSlice.reducer,
  },
});

export default store;
