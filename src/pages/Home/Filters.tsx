import styled from "styled-components";

export default function Filters() {
  const filters = [
    {
      id: 1,
      name: "пицца",
    },
    {
      id: 2,
      name: "шаурма",
    },
    {
      id: 3,
      name: "суши",
    },
    {
      id: 4,
      name: "бургеры",
    },
    {
      id: 5,
      name: "супы",
    },
    {
      id: 6,
      name: "горячие блюда",
    },
    {
      id: 7,
      name: "шашлык",
    },
    {
      id: 8,
      name: "салаты",
    },
  ];

  return (
    <Wrapper>
      <Button className="active">Все доставки</Button>
      {filters.map((filter) => (
        <Button key={filter.id}>{filter.name}</Button>
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
    transition: opacity 0.3s ease-out;
  }

  &:hover::after {
    opacity: 1;
  }
`;
