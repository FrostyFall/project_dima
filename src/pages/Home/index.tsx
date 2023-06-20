import styled from "styled-components";
import CompanyContainer from "./CompanyContainer";
import FilterContainer from "./FilterContainer";
import {
  setCompaniesInitialData,
  setFullFormPaymentMethods,
  setFullSelectedPaymentMethods,
  setPaymentMethodsData,
  setProductTypesData,
} from "src/store/actions";
import { ICompany } from "src/interfaces/company.interface";
import store from "../../store";
import { IProductType } from "src/interfaces/product-types.interface";
import { IPaymentMethod } from "src/interfaces/payment-method.interface";

export default function Home() {
  return (
    <Wrapper>
      <FilterContainer></FilterContainer>
      <CompanyContainer></CompanyContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.5rem 0;
`;

export const homeLoader = async () => {
  const companiesRes = await fetch("http://localhost:3001/companies");
  const pTypesRes = await fetch("http://localhost:3001/productTypes");
  const pMethodsRes = await fetch("http://localhost:3001/paymentMethods");
  const companiesJson = (await companiesRes.json()) as ICompany[];
  const pTypesJson = (await pTypesRes.json()) as IProductType[];
  const pMethodsJson = (await pMethodsRes.json()) as IPaymentMethod[];
  const pMethodsIds = pMethodsJson.map((method) => method.id);

  store.dispatch(setCompaniesInitialData(companiesJson));
  store.dispatch(setProductTypesData(pTypesJson));
  store.dispatch(setPaymentMethodsData(pMethodsJson));
  store.dispatch(setFullFormPaymentMethods(pMethodsIds));
  store.dispatch(setFullSelectedPaymentMethods(pMethodsIds));

  return null;
};
