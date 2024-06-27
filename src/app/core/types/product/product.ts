import { ProductImage } from '@core/types/product/product-image';

export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: number;
  type: number;
  status: number;
  price: number;
  regular_price: number;
  images: ProductImage[];
}
