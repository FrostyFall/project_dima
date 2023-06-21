import styled from "styled-components";
import ProductType from "./ProductType";
import { useSelector } from "react-redux";
import { IStore } from "src/store/interfaces/store.interface";

export default function ProductTypesContainer() {
  const selectedCompany = useSelector(
    (state: IStore) => state.companies.selectedCompany
  );

  return (
    <Wrapper>
      {selectedCompany?.productTypeRange?.map((type) => (
        <ProductType key={type.id} companyId={selectedCompany.id} type={type} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 2rem;
`;
