export type TIcon = {
  width?: number;
  height?: number;
};

export type TProduct = {
  id: number;
  name: string;
  image: string;
  price: number;
  rate: number;
  reduction: boolean;
};

export type TApiResponseItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type TCartItem = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export type TReduction = {
  code: string;
  amount: number;
};

export type TRootState = {
  products: TProductsState;
  cart: any;
};

export type TProductsState = {
  products: TProduct[];
};
