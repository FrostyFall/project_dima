import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "src/store/interfaces/store.interface";
import { setSelectedProductTypeId } from "src/store/actions";

export default function Filters() {
  const productTypes = useSelector((store: IStore) => store.productTypes.data);
  const selectedProductTypeId = useSelector(
    (store: IStore) => store.filters.selectedProductTypeId
  );
  const dispatch = useDispatch();

  const selectHandler = (id: number) => {
    dispatch(setSelectedProductTypeId(id));
  };

  return (
    <Wrapper>
      <Button
        onClick={() => selectHandler(-1)}
        className={selectedProductTypeId === -1 ? "active" : ""}
        type='button'
      >
        Все доставки
      </Button>
      {productTypes.map((productType) => (
        <Button
          onClick={() => selectHandler(productType.id)}
          className={selectedProductTypeId === productType.id ? "active" : ""}
          key={productType.id}
          type='button'
        >
          {productType.nameRu}
        </Button>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: flex-start;
  column-gap: 0.75rem;
  flex-wrap: wrap;
  font-size: 1.25rem;
  transform: translateX(-0.4em);
`;
const Button = styled.button`
  background: #fff;
  border: none;
  font-size: 1.25rem;
  padding: 0.1em 0.5em;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 400;
  position: relative;

  &.active {
    background: var(--primary);
    color: #fff;

    &::after {
      opacity: 0 !important;
    }
  }

  &::first-letter {
    text-transform: uppercase;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: black;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    width: calc(100% - 1em);
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;
