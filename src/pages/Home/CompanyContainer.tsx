import styled from "styled-components";
import CompanyPreview from "./CompanyPreview";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function CompanyContainer() {
  const companies = useSelector((store: IStore) => store.companies.data);
  const selectedProductTypeId = useSelector(
    (store: IStore) => store.filters.selectedProductTypeId
  );
  const selectedPaymentMethods = useSelector(
    (store: IStore) => store.filters.selectedPaymentMethods
  );
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    setIsEmpty(true);
  }, [selectedProductTypeId, selectedPaymentMethods]);

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
        .map((company) => {
          if (isEmpty) {
            setIsEmpty(false);
          }
          return <CompanyPreview key={company.id} company={company} />;
        })}
      {isEmpty && <div>Нет товаров</div>}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 2.75%;
  row-gap: 2rem;

  @media (max-width: 540px) {
    justify-content: space-around;
  }
`;
