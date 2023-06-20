import { useParams } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Cart";
import ProductTypesContainer from "./ProductTypesContainer";
import CartModal from "./CartModal";

export default function Company() {
  const { id } = useParams();
  console.log(id);

  return (
    <Wrapper>
      <div className="company-content">
        <div className="company-info">
          <div className="company-info__header">
            <H2>Pizza Planet</H2>
            <DeliveryInfoWrapper>
              <DeliveryInfo>От 14 руб.</DeliveryInfo>
              <DeliveryInfo>Доставка бесплатная</DeliveryInfo>
            </DeliveryInfoWrapper>
          </div>
          <div className="company-info__footer">
            <TypesNav>
              <TypesList>
                <TypesItem>
                  <a href="#">Пиццы</a>
                </TypesItem>
                <TypesItem>Комбо</TypesItem>
                <TypesItem>Паста</TypesItem>
                <TypesItem>Закуски</TypesItem>
              </TypesList>
            </TypesNav>
          </div>
        </div>

        <div className="company-products">
          <ProductTypesContainer />
        </div>
      </div>
      <CartWrapper>
        <Cart />
      </CartWrapper>
      {/* <CartModal /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.5rem 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 1.5rem;

  .company-content {
    width: 100%;
  }

  .company-info {
    border-bottom: 2px solid #eeeeee;
    padding-bottom: 1.5rem;
    margin-bottom: 1.25rem;
  }

  .company-info__header {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .company-info__footer {
    position: sticky;
    top: 0;
  }
`;
const CartWrapper = styled.div`
  padding-top: 1rem;
  position: sticky;
  top: 0;
  bottom: 0;
`;
const H2 = styled.h2`
  color: black;
  font-size: 2.25rem;
  font-weight: 700;
  margin-right: 1.25rem;
`;
const DeliveryInfo = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  color: #8a8a8a;
`;
const DeliveryInfoWrapper = styled.div`
  display: flex;
  column-gap: 0.75rem;
`;
const TypesNav = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
`;
const TypesList = styled.ul`
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;
  list-style: none;
`;

const TypesItem = styled.li`
  font-size: 1.25rem;
  color: #444;
  font-weight: 500;
  cursor: pointer;

  a {
    text-decoration: none;
  }
  a,
  a:active,
  a:focus,
  a:visited {
    color: inherit;
  }
  a:hover {
    color: #000;
  }
`;
