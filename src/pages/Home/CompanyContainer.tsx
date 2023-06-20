import styled from "styled-components";
import CompanyPreview from "./CompanyPreview";

export default function CompanyContainer() {
  const companies = [
    {
      id: 1,
      name: "Накормим.бай",
      description: "Доставка 5 руб. Бесплатно от 20 руб.",
      deliveryInfo: {
        minTime: 50,
        maxTime: 90,
        minPrice: 14,
        deliveryPrice: null,
      },
      reviewsInfo: {
        score: 4.3,
        count: 114,
      },
      productTypeRange: [
        {
          id: 1,
          name: "пицца",
        },
        {
          id: 2,
          name: "шаурма",
        },
        {
          id: 4,
          name: "бургеры",
        },
      ],
      location: "витебск",
      paymentMethods: ["наличными", "картой курьеру"],
    },
    {
      id: 2,
      name: "Дом папочки. Пироги",
      description: "Доставка 4 руб. Бесплатно от 30 руб.",
      deliveryInfo: {
        minTime: 40,
        maxTime: 60,
        minPrice: 18,
        deliveryPrice: 7,
      },
      reviewsInfo: {
        score: 4.8,
        count: 67,
      },
      productTypeRange: [
        {
          id: 1,
          name: "пицца",
        },
        {
          id: 5,
          name: "супы",
        },
        {
          id: 8,
          name: "салаты",
        },
      ],
      location: "витебск",
      paymentMethods: ["наличными", "картой онлайн"],
    },
    {
      id: 3,
      name: "ОкПирог",
      description: "Доставка 5 руб. Бесплатно от 40 руб.",
      deliveryInfo: {
        minTime: 50,
        maxTime: 70,
        minPrice: 20,
        deliveryPrice: 5,
      },
      reviewsInfo: {
        score: 4.5,
        count: 31,
      },
      productTypeRange: [
        {
          id: 2,
          name: "шаурма",
        },
        {
          id: 3,
          name: "суши",
        },
        {
          id: 6,
          name: "горячие блюда",
        },
      ],
      location: "минск",
      paymentMethods: ["наличными", "картой курьеру", "картой онлайн"],
    },
    {
      id: 4,
      name: "Чебурек.Врот",
      description: "Доставка 5 руб. Бесплатно от 40 руб.",
      deliveryInfo: {
        minTime: 50,
        maxTime: 70,
        minPrice: 20,
        deliveryPrice: 5,
      },
      reviewsInfo: {
        score: 3.7,
        count: 31,
      },
      productTypeRange: [
        {
          id: 1,
          name: "чебурек",
        },
      ],
      location: "минск",
      paymentMethods: ["наличными", "картой курьеру", "картой онлайн"],
    },
    {
      id: 5,
      name: "KoкПирог",
      description: "Доставка 5 руб. Бесплатно от 40 руб.",
      deliveryInfo: {
        minTime: 50,
        maxTime: 70,
        minPrice: 20,
        deliveryPrice: 5,
      },
      reviewsInfo: {
        score: 4.5,
        count: 31,
      },
      productTypeRange: [
        {
          id: 2,
          name: "шаурма",
        },
        {
          id: 3,
          name: "суши",
        },
        {
          id: 6,
          name: "горячие блюда",
        },
      ],
      location: "минск",
      paymentMethods: ["наличными", "картой курьеру", "картой онлайн"],
    },
  ];

  return (
    <Wrapper>
      {companies.map((company) => (
        <CompanyPreview key={company.id} company={company} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 2.75%;
  row-gap: 2rem;

  @media (max-width: 540px) {
    justify-content: space-around;
  }
`;
