import styled from "styled-components";
import { useState } from "react";
import { IProduct } from "src/interfaces/product.interface";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "src/store/interfaces/store.interface";
import { addToCart, toggleProductModal } from "src/store/actions";

interface Props {
  product: IProduct | null;
}

export default function ProductModal({ product }: Props) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  function increment() {
    if (count < 100) setCount(count + 1);
  }
  function decrement() {
    if (count > 1) setCount(count - 1);
  }
  function onAddToCart() {
    if (product !== null) {
      dispatch(addToCart({ data: product, amount: count }));
      dispatch(toggleProductModal(false));
    }
  }

  return (
    <Modal onClick={() => dispatch(toggleProductModal(false))}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => dispatch(toggleProductModal(false))}
          className='closeBtn'
        >
          X
        </button>
        <img className='img' src={product?.imgUrl} alt='Product' />
        <Wrapper>
          <ContentWrapper>
            <div className='container'>
              <p className='product__title'>{product?.name}</p>
              <p className='product__price'>{product?.price} р.</p>
            </div>
            <p className='product__weight'>{product?.weight}</p>
            <p className='product__ingredients'>
              {product?.ingredientsRange.join(", ")}
            </p>
          </ContentWrapper>
          <Footer>
            <ButtonsWrapper>
              <button className='btn minus' onClick={() => decrement()}>
                -
              </button>
              <p className='count'>{count}</p>
              <button className='btn plus' onClick={() => increment()}>
                +
              </button>
            </ButtonsWrapper>
            <CTAButton type='button' onClick={onAddToCart}>
              Добавить к заказу
            </CTAButton>
          </Footer>
        </Wrapper>
      </ModalContent>
    </Modal>
  );
}

const Modal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const ModalContent = styled.div`
  position: relative;
  width: 400px;
  height: 550px;
  background-color: #fff;
  border-radius: 25px;

  .closeBtn {
    position: absolute;
    width: 40px;
    height: 40px;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0 25px 0 0;
    transition: 0.5s ease;
    right: 0;

    &:hover {
      background-color: red;
      color: #fff;
      transition: 0.5s ease;
    }
  }
  .img {
    height: auto;
    max-height: 250px;
    width: 100%;
    // height: 250px;
    object-fit: cover;
    border-radius: 25px 25px 0 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 100%;
  padding: 30px 30px 50px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .product__title {
    font-size: 16px;
  }
  .product__weight {
    font-size: 16px;
    opacity: 0.5;
    color: gray;
    margin-bottom: 20px;
  }
  .product__price {
    font-size: 20px;
  }
  .product__ingredients {
    font-size: 16px;
    color: gray;

    &::first-letter {
      text-transform: capitalize;
    }
  }
`;
const ContentWrapper = styled.div``;
const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;

  .btn {
    width: 36px;
    height: 36px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    transition: 0.5s ease;

    &:hover {
      background-color: #000;
      color: #fff;
      transition: 0.5s ease;
    }
  }

  .plus {
  }
  .minus {
  }
  .count {
  }
`;
const CTAButton = styled.button`
  border: none;
  background-color: rgba(49, 188, 107, 0.9);
  font-size: 1.075em;
  color: #fff;
  border-radius: 4px;
  padding: 0.6em 1.2em;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(49, 188, 107, 1);
  }
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
