import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <FooterContent>
        Доставка пиццы, шаурмы, суши, бургеров, супов, горячих блюд, шашлыка
      </FooterContent>
      <FooterCities>
        Доставка в Минске, Витебске, Гродно, Гомеле, Бресте, Могилеве
      </FooterCities>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  height: 300px;
  color: #fff;
`;
const FooterContent = styled.p`
  font-size: 15px;
  margin: 130px 0 90px 0;
`;
const FooterCities = styled.p`
  font-size: 13px;
  opacity: 0.25;
`;