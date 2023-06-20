import styled from "styled-components";
import { Close } from "../../static";

export default function Cart() {
  const isCartEmpty = false;

  return (
    <Wrapper>
      <Main>
        <Header>
          <h2 className='pcart__title'>Мой заказ</h2>
          {!isCartEmpty && (
            <ResetBtn>
              <SvgWrapper>
                <Close />
              </SvgWrapper>
            </ResetBtn>
          )}
        </Header>
        {!isCartEmpty ? (
          <Content className='pcart__content'>Hui</Content>
        ) : (
          <span className='pcart__no-items'>
            Выберите блюда и добавьте их к заказу
          </span>
        )}
      </Main>
      {!isCartEmpty && (
        <Footer>
          <FooterInfo>
            <span>Итого</span>
            <span className='pcart__summary-price'>21,50 р.</span>
          </FooterInfo>
          <CTAButton>Оформить заказ</CTAButton>
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
const Content = styled.div``;
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
const Footer = styled.footer``;
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
