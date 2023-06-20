import companiesSlice from "./slices/companies.slice";
import filtersSlice from "./slices/filters.slice";
import modalsSlice from "./slices/modals.slice";
import paymentMethodsSlice from "./slices/payment-methods.slice";
import productTypesSlice from "./slices/product-types.slice";

export const { toggleFiltersModal } = modalsSlice.actions;
export const { setCompaniesData, setCompaniesInitialData } =
  companiesSlice.actions;
export const { setProductTypesData } = productTypesSlice.actions;
export const {
  setSelectedProductTypeId,
  setFormSelectedPTypeId,
  resetSelectedProductTypeIds,
  setSelectedPaymentMethods,
  setFormPaymentMethods,
  setFullFormPaymentMethods,
  setFullSelectedPaymentMethods,
} = filtersSlice.actions;
export const { setPaymentMethodsData } = paymentMethodsSlice.actions;
