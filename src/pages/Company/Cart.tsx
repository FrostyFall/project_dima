import styled from "styled-components";
import { Close } from "../../static";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "src/store/interfaces/store.interface";
import { resetCart } from "src/store/actions";

type Props = {
  isModalActive: boolean;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Cart({ setIsModalActive }: Props) {
  const cartProducts = useSelector((state: IStore) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Main>
        <Header>
          <h2 className='pcart__title'>Мой заказ</h2>
          {cartProducts.length > 0 && (
            <ResetBtn onClick={() => dispatch(resetCart())}>
              <SvgWrapper>
                <Close />
              </SvgWrapper>
            </ResetBtn>
          )}
        </Header>
        {cartProducts.length > 0 ? (
          <Content className='pcart__content'>
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
          </Content>
        ) : (
          <span className='pcart__no-items'>
            Выберите блюда и добавьте их к заказу
          </span>
        )}
      </Main>
      {cartProducts.length > 0 && (
        <Footer>
          <FooterInfo>
            <span>Итого</span>
            <span className='pcart__summary-price'>
              {cartProducts.reduce((acc, value) => {
                return acc + value.amount * value.data.price;
              }, 0)}{" "}
              р.
            </span>
          </FooterInfo>
          <CTAButton onClick={() => setIsModalActive(true)}>
            Оформить заказ
          </CTAButton>
        </Footer>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f5f5f5;
  min-width: 275px;
  min-height: calc(100vh - 2rem);
  border-radius: 10px;
  color: #000;
  font-size: 1rem;
  padding: 1em 1.25em;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .pcart__no-items {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(182 182 182);
    width: 100%;
    padding: 2rem;
    text-align: center;
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  .pcart__title {
    font-weight: 700;
    font-size: 1.5em;
    color: #000;
  }
`;
const Main = styled.div``;
const Content = styled.div`
  height: 76vh;
  overflow-y: auto;
`;
const Product = styled.div`
  display: flex;
  margin: 20px 0;

  .product__container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 150px;
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
const SvgWrapper = styled.div`
  position: relative;
  width: 1.3rem;
  height: 1.3rem;
`;
const ResetBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Footer = styled.footer`
  margin-top: 20px;
`;
const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  .pcart__summary-price {
    font-weight: 500;
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
  width: 100%;

  &:hover {
    background-color: rgba(49, 188, 107, 1);
  }
`;
