import styled from "styled-components";
import ProductPreview from "./ProductPreview";

const data = [
  {
    id: 1,
    companyId: 1,
    productType: {
      id: 1,
      name: "пиццы",
    },
    name: "Пицца 'Пеперони'",
    size: 30,
    weight: 650,
    ingredientsRange: ["тесто", "сыр 'Моцарелла'", "пеперони", "соус томатный"],
    reviewsInfo: {
      score: 4.5,
      count: 31,
    },
  },
  {
    id: 2,
    companyId: 1,
    productType: {
      id: 1,
      name: "пиццы",
    },
    name: "Пицца 'Кок в рот'",
    size: 30,
    weight: 650,
    ingredientsRange: ["тесто", "сыр 'Моцарелла'", "пеперони", "соус томатный"],
    reviewsInfo: {
      score: 4.5,
      count: 31,
    },
  },
];

export default function ProductType() {
  return (
    <Wrapper>
      <h2 className='product__type-name'>Пиццы</h2>
      <div className='product__previews-container'>
        <ProductPreview product={data[0]} />
        <ProductPreview product={data[0]} />
        <ProductPreview product={data[1]} />
        <ProductPreview product={data[1]} />
        <ProductPreview product={data[0]} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;

  .product__type-name {
    margin-bottom: 1.25rem;
  }

  .product__previews-container {
    display: flex;
    flex-wrap: wrap;
    column-gap: 4%;
    row-gap: 2.25rem;
  }
`;
