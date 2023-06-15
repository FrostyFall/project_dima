import styled from "styled-components";

export default function CompanyPreview() {
  const company = {
    id: 3,
    name: "КокПирог",
    description: "Доставка 5 руб. Бесплатно от 40 руб.",
    deliveryInfo: {
      minTime: 50,
      maxTime: 70,
      minPrice: 20,
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
  };

  return (
    <Figure>
      <img
        src='https://s5o.ru/storage/simple/cyber/edt/bb/f9/38/f5/cyberef95b3ecf51.jpg'
        alt=''
      />
      <Figcaption>
        <h4 className='company__name'>{company.name}</h4>
        <InfoWrapper>
          <ReviewsWrapper>
            <span>star icon</span>{" "}
            <span className='company__reviews-score'>
              {company.reviewsInfo.score}
            </span>
            <span className='company__reviews-count'>
              ({company.reviewsInfo.count})
            </span>
          </ReviewsWrapper>
          <span className='company__products-range'>
            Пиццы, салаты, десерты
          </span>
        </InfoWrapper>
        <span className='company__delivery-info'>
          Заказ от {company.deliveryInfo.minPrice} руб. Доставка бесплатная
        </span>
      </Figcaption>
    </Figure>
  );
}

const Figure = styled.figure`
  width: 30%;
  cursor: pointer;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .company__name {
    font-weight: 700;
    font-size: 1.2rem;
  }

  .company__delivery-info {
    font-size: 0.8rem;
  }
`;

const Figcaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 0.25rem;
  padding: 0.75em 1em;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;

  .company__products-range {
    color: var(--text-secondary);
  }

  .company__reviews-count {
    color: var(--text-secondary);
  }
`;

const ReviewsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;

  .company__reviews-score {
    color: var(--review);
    font-weight: 700;
    margin-right: 0.25rem;
  }
`;
