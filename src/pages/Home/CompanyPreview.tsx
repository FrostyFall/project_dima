import styled from "styled-components";
import { ICompany } from "../../interfaces/company.interface";
import { useNavigate } from "react-router-dom";
import { Star } from "../../static";

interface Props {
  company: ICompany;
}

export default function CompanyPreview({ company }: Props) {
  const navigate = useNavigate();

  return (
    <Figure onClick={() => navigate(`/companies/${company.id}`)}>
      <img src={company.imgUrl} alt='Company' />
      <Figcaption>
        <h4 className='company__name'>{company.name}</h4>
        <InfoWrapper>
          <ReviewsWrapper>
            <SvgWrapper>
              <Star />{" "}
            </SvgWrapper>
            <span className='company__reviews-score'>
              {company.reviewsInfo.score}
            </span>
            <span className='company__reviews-count'>
              ({company.reviewsInfo.count})
            </span>
          </ReviewsWrapper>
          <span className='company__products-range'>
            {company.productTypeRange
              .map((productType) => productType.nameRu)
              .join(", ")}
          </span>
        </InfoWrapper>
        <span className='company__delivery-info'>
          Заказ от {company.deliveryInfo.minPrice} руб. Доставка{" "}
          {company.deliveryInfo.deliveryPrice
            ? `${company.deliveryInfo.deliveryPrice} руб.`
            : "бесплатная"}
        </span>
        <div className='company__delivery-time'>
          {company.deliveryInfo.minTime}-{company.deliveryInfo.maxTime} мин
        </div>
      </Figcaption>
    </Figure>
  );
}

const Figure = styled.figure`
  width: 31.5%;
  cursor: pointer;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s;

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  .company__name {
    font-weight: 700;
    font-size: 1.2rem;
  }
  .company__delivery-info {
    font-size: 0.8rem;
  }

  &:hover {
    transform: translateY(-1%);
  }

  @media (max-width: 768px) {
    width: 48.6%;
  }
  @media (max-width: 540px) {
    width: 80%;
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
  min-height: 100px;
  position: relative;

  .company__delivery-time {
    position: absolute;
    top: -2.5em;
    right: 1em;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 0.925rem;
    padding: 0.2em 0.6em;
    border-radius: 4px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;

  .company__products-range {
    color: var(--text-secondary);

    &::first-letter {
      text-transform: uppercase;
    }
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

const SvgWrapper = styled.div`
  position: relative;
  top: -1px;
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.3rem;
`;
