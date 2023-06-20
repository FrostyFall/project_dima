import styled from "styled-components";
import ProductType from "./ProductType";

export default function ProductTypesContainer() {
  return (
    <Wrapper>
      <ProductType />
      <ProductType />
      <ProductType />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 2rem;
`;
