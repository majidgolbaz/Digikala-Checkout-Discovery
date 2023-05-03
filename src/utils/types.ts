export interface IProductProps {
  id?: number;
  brand?: string;
  customClass?: string;
  title?: string;
  description?: string;
  category?: string;
  price?: number;
  discountPercentage?: number;
  stock?: number;
  rating?: number;
  thumbnail?: string;
  images?: string[];
}

export interface IActualData {
  limit?: number;
  products?: IProductProps[];
  skip?: number;
  total?: number;
}
