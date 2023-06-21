import authSlice from "./slices/auth.slice";
import cartSlice from "./slices/cart.interface";
import companiesSlice from "./slices/companies.slice";
import filtersSlice from "./slices/filters.slice";
import modalsSlice from "./slices/modals.slice";
import paymentMethodsSlice from "./slices/payment-methods.slice";
import productTypesSlice from "./slices/product-types.slice";

export const { toggleFiltersModal, toggleProductModal, setProductData } =
  modalsSlice.actions;
export const {
  setCompaniesData,
  setCompaniesInitialData,
  setSelectedCompany,
  resetSelectedCompany,
} = companiesSlice.actions;
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
export const { setIsAuth } = authSlice.actions;
export const { addToCart, resetCart } = cartSlice.actions;
