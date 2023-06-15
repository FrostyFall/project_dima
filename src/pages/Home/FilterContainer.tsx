import styled from "styled-components";
import "../../index.css";

import Filters from "./Filters";

export default function FilterContainer() {
  return (
    <MainWrapper>
      <Wrapper>
        <H2>Доставка</H2>
        <Button>
          <span>Icon</span> Фильтры
        </Button>
      </Wrapper>
      <Filters />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  margin-bottom: 3rem;
`;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const H2 = styled.h2`
  color: black;
  font-size: 2.25rem;
  font-weight: 700;
`;

const Button = styled.button`
  background: #fff;
  border: none;
  font-size: 1rem;
  padding: 0.1em 0.4em;
  cursor: pointer;
  border-radius: 3px;
  font-weight: 700;

  &:hover {
    background: var(--primary);
    color: #fff;
  }
`;
