import { IAuthState } from "./auth.interface";
import { ICompaniesState } from "./companies.interface";
import { IFiltersState } from "./filters.interface";
import { IModalsState } from "./modals.interface";
import { IPaymentMethodsState } from "./payment-methods.interface";
import { IProductTypesState } from "./product-types.interface";

export interface IStore {
  modals: IModalsState;
  companies: ICompaniesState;
  productTypes: IProductTypesState;
  filters: IFiltersState;
  paymentMethods: IPaymentMethodsState;
  auth: IAuthState;
}
