import styled from "styled-components";
import ProductPreview from "./ProductPreview";
import { useEffect, useState } from "react";
import { IProduct } from "src/interfaces/product.interface";

interface Props {
  type: {
    id: number;
    name: string;
    nameRu: string;
  };
  companyId: number;
}

export default function ProductType({ type, companyId }: Props) {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch(
      `http://localhost:3001/products?companyId=${companyId}&productType.id=${type.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [companyId, type]);

  return (
    <Wrapper>
      <h2 className='product__type-name'>{type.nameRu}</h2>
      <div className='product__previews-container'>
        {products.map((product) => (
          <ProductPreview product={product} />
        ))}
        {products.length === 0 && <span>Нет товаров в данной категории</span>}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;

  .product__type-name {
    margin-bottom: 1.25rem;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  .product__previews-container {
    display: flex;
    flex-wrap: wrap;
    column-gap: 4%;
    row-gap: 2.25rem;
  }
`;
