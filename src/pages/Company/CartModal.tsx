import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "src/store/interfaces/store.interface";
import { resetCart } from "src/store/actions";

type Props = {
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CartModal({ setIsModalActive }: Props) {
  const cartProducts = useSelector((state: IStore) => state.cart.products);
  const selectedCompany = useSelector(
    (state: IStore) => state.companies.selectedCompany
  );
  const dispatch = useDispatch();

  return (
    <Modal onClick={() => setIsModalActive(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setIsModalActive(false)} className='closeBtn'>
          X
        </button>
        <p className='company__title'>{selectedCompany?.name}</p>
        <Wrapper>
          {cartProducts.map((product) => (
            <Product key={product.data.id}>
              <div className='product__container'>
                <p className='product__title'>{product.data.name}</p>
                <p className='product__weight'>
                  {product.data.weight} г / {product.data.size} см
                </p>
              </div>
              <p className='product__count'>{product.amount}</p>
              <p className='product__price'>
                {product.amount * product.data.price} р.
              </p>
            </Product>
          ))}
        </Wrapper>
        <form>
          <div className='container'>
            <label htmlFor='address' className='text'>
              Адрес доставки
            </label>
            <Input id='address' />
          </div>
          <div className='container'>
            <label htmlFor='name' className='text'>
              Ваше имя
            </label>
            <Input id='name' />
          </div>

          <div className='container'>
            <label htmlFor='phone' className='text'>
              Ваш телефон
            </label>
            <Input id='phone' type='phone' />
          </div>
        </form>
        <CTAButton
          onClick={() => {
            dispatch(resetCart());
            setIsModalActive(false);
          }}
        >
          Оформить заказ
        </CTAButton>
      </ModalContent>
    </Modal>
  );
}

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 1;
`;
const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 400px;
  height: 650px;
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
  .company__title {
    display: flex;
    justify-content: center;
    height: 40px;
    padding: 10px 30px;
    border-radius: 0 25px 0 0;
    font-size: 20px;
    font-weight: bold;
  }
  .container {
    display: flex;
    flex-direction: column;
    padding: 10px 30px 0;
  }
  .text {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  width: 100%;
  padding: 30px 30px 10px;
  margin-top: 10px;
  overflow-y: auto;

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
  }
`;
const Product = styled.div`
  display: flex;

  .product__container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 260px;
    width: 100%;
  }
  .product__title {
    font-size: 15px;
  }
  .product__weight {
    font-size: 15px;
    font-weight: 400;
    opacity: 0.5;
    margin-top: 5px;
  }
  .product__count {
    display: flex;
    justify-content: flex-end;
    font-size: 15px;
    max-width: 20px;
    width: 100%;
  }
  .product__price {
    display: flex;
    justify-content: flex-end;
    font-size: 15px;
    font-weight: bold;
    max-width: 60px;
    width: 100%;
  }
`;
const Input = styled.input`
  max-width: 340px;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  font-size: 20px;
  margin-bottom: 20px;

  @media (max-width: 550px) {
    width: 200px;
    height: 36px;
    font-size: 16px;
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
  width: 250px;

  &:hover {
    background-color: rgba(49, 188, 107, 1);
  }
`;
