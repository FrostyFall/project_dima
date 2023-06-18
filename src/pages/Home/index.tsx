import styled from "styled-components";
import CompanyContainer from "./CompanyContainer";
import FilterContainer from "./FilterContainer";

export default function Home() {
  return (
    <Wrapper>
      <FilterContainer></FilterContainer>
      <CompanyContainer></CompanyContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2.5rem 0;
`;
