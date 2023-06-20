import { IProduct } from "src/interfaces/product.interface";
import styled from "styled-components";

interface Props {
  product: IProduct;
}

export default function ProductPreview({ product }: Props) {
  return (
    <Figure>
      <img
        src='https://s5o.ru/storage/simple/cyber/edt/bb/f9/38/f5/cyberef95b3ecf51.jpg'
        alt='Product'
      />
      <Figcaption>
        <ReviewsWrapper>
          <span className='product__reviews-score'>
            {product.reviewsInfo.score}
          </span>
          <span className='product__reviews-count'>
            {product.reviewsInfo.count} отзыва
          </span>
        </ReviewsWrapper>
        <InfoWrapper>
          <div className='product__left-info'>
            <h3 className='product__name product-primary-info'>
              {product.name}
            </h3>
            <span className='product__ingredients product-secondary-info'>
              {product.ingredientsRange.join(", ")}
            </span>
          </div>
          <div className='product__right-info'>
            <div className='product__price product-primary-info'>23,50 р.</div>
            <div className='product__weight product-secondary-info'>650 г</div>
            <div className='product__size product-secondary-info'>30 см</div>
          </div>
        </InfoWrapper>
        <CTAButton type='button'>Добавить в корзину</CTAButton>
      </Figcaption>
    </Figure>
  );
}

const Figure = styled.figure`
  width: 48%;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: auto;
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: translateY(-1%);
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Figcaption = styled.figcaption`
  padding: 1em 1.25em;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  min-height: 100px;
  position: relative;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
  row-gap: 0.75em;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 0.85rem;

  .product__name,
  .product__price {
    margin-bottom: 0.15rem;
  }

  .product-primary-info {
    color: #000;
    font-weight: 500;
    font-size: 1.4em;
  }

  .product-secondary-info {
    color: #999;
    font-size: 1.1em;
  }

  .product__left-info,
  .product__right-info {
    display: flex;
    flex-direction: column;
  }

  .product__left-info {
    // align-items: flex-start;
    // width: 75%;
  }

  .product__right-info {
    align-items: flex-end;
    white-space: nowrap;
    // width: 30%;
  }

  .product__ingredients::first-letter {
    text-transform: capitalize;
  }
`;

const ReviewsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.85rem;

  .product__reviews-score {
    color: #fff;
    background-color: var(--review);
    padding: 0.05em 0.5em;
    border-radius: 3px;
    font-weight: 500;
    margin-right: 0.5rem;
  }

  .product__reviews-count {
    color: var(--text-secondary);
  }
`;
const CTAButton = styled.button`
  border: none;
  background-color: rgba(49, 188, 107, 0.9);
  font-size: 1.075em;
  color: #fff;
  border-radius: 4px;
  padding: 0.6em;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(49, 188, 107, 1);
  }
`;
