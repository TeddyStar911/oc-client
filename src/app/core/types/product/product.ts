import { ProductImage } from '@core/types/product/product-image';
import { ProductAttribute } from '@core/types/product/product-attribute';
import { ProductTag } from '@core/types/product/product-tag';

export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: number;
  description: string;
  type: number;
  status: number;
  price: number;
  regular_price: number;
  images: ProductImage[];
  attributes: ProductAttribute[];
  tags: ProductTag[];
}
