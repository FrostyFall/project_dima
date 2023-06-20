import styled from "styled-components";
import CompanyPreview from "./CompanyPreview";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";

export default function CompanyContainer() {
  const companies = useSelector((store: IStore) => store.companies.data);
  const selectedProductTypeId = useSelector(
    (store: IStore) => store.filters.selectedProductTypeId
  );
  const selectedPaymentMethods = useSelector(
    (store: IStore) => store.filters.selectedPaymentMethods
  );

  return (
    <Wrapper>
      {companies
        .filter((company) => {
          if (selectedProductTypeId === -1) return true;
          return company.productTypeRange
            .map((type) => type.id)
            .includes(selectedProductTypeId);
        })
        .filter((company) => {
          let suitable = false;
          const companyMethods = company.paymentMethods.map(
            (method) => method.id
          );

          companyMethods.forEach((method) => {
            if (selectedPaymentMethods.includes(method)) {
              suitable = true;
            }
          });

          return suitable;
        })
        .map((company) => (
          <CompanyPreview key={company.id} company={company} />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 2.75%;
  row-gap: 2rem;
`;
