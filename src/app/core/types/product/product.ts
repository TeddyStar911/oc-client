import { ProductImage } from '@core/types/product/product-image';
import { ProductAttribute } from '@core/types/product/product-attribute';
import { ProductTag } from '@core/types/product/product-tag';
import { ProductTypes } from '@core/enums/product/product-types';
import { ProductCategory } from '@core/types/product/product-category';
import { ProductVariation } from '@core/types/product/product-variation';

export interface Product {
  id: number;
  name: string;
  sku: string;
  slug: string;
  permalink: number;
  description: string;
  status: number;
  price: number;
  regular_price: number;
  images: ProductImage[];
  primary_image: ProductImage;
  categories: ProductCategory[];
  attributes: ProductAttribute[];
  variations: ProductVariation[];
  tags: ProductTag[];
  type: ProductTypes;
}
