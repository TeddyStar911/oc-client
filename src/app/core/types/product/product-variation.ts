import { ProductImage } from '@core/types/product/product-image';
import { ProductAttribute } from '@core/types/product/product-attribute';

export interface ProductVariation {
  id: number;
  sku: string;
  name: string;
  short_name: string;
  price: number;
  regular_price: number;
  status: string;
  image: ProductImage;
  attributes: ProductAttribute[];
}
