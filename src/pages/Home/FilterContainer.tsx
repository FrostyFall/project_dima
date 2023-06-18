import "../../index.css";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { Filters as FiltersIcon } from "../../static";
import Filters from "./Filters";
import FiltersModal from "./FiltersModal";
import { IStore } from "src/store/interfaces/store.interface";
import { toggleFiltersModal } from "src/store/actions";

export default function FilterContainer() {
  const isModalOpen = useSelector(
    (state: IStore) => state.modals.isFiltersModalOpen
  );
  const dispatch = useDispatch();

  return (
    <MainWrapper>
      <Wrapper>
        <H2>Доставка</H2>
        <Button onClick={() => dispatch(toggleFiltersModal(!isModalOpen))}>
          <SvgWrapper>
            <FiltersIcon />
          </SvgWrapper>{" "}
          Фильтры
        </Button>
      </Wrapper>
      <Filters />
      {isModalOpen && <FiltersModal />}
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
