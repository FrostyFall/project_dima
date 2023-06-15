import styled from "styled-components";
import "../../index.css";

import Filters from "./Filters";
import { Filters as FiltersIcon } from "../../static";

export default function FilterContainer() {
  return (
    <MainWrapper>
      <Wrapper>
        <H2>Доставка</H2>
        <Button>
          <SvgWrapper>
            <FiltersIcon />
          </SvgWrapper>{" "}
          Фильтры
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
  display: flex;
  align-items: center;
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

    svg path {
      fill: #fff;
    }
  }
`;

const SvgWrapper = styled.div`
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.3rem;
`;
