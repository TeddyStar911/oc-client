import { ProductImage } from '@core/types/product/product-image';
import { ProductAttribute } from '@core/types/product/product-attribute';

export interface ProductVariation {
  id: number;
  sku: string;
  name: string;
  price: string;
  regular_price: string;
  status: string;
  image: ProductImage;
  attributes: ProductAttribute[];
}
