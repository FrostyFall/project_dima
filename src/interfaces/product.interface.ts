export interface IProduct {
  id: number;
  companyId: number;
  productType: {
    id: number;
    name: string;
  };
  name: string;
  size: number;
  weight: number;
  ingredientsRange: string[];
  reviewsInfo: {
    score: number;
    count: number;
  };
  price: number;
}
