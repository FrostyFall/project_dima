export interface ICompany {
  id: number;
  name: string;
  description: string;
  deliveryInfo: {
    minTime: number;
    maxTime: number;
    minPrice: number;
    deliveryPrice: number | null;
  };
  reviewsInfo: {
    score: number;
    count: number;
  };
  productTypeRange: {
    id: number;
    name: string;
  }[];
  location: string;
  paymentMethods: string[];
}
