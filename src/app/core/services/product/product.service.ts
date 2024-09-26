import { inject, Injectable } from '@angular/core';
import { injectQuery } from '@ngneat/query';
import { HttpClient } from '@angular/common/http';
import { Product } from '@core/types/product/product';
import {
  GET_PRODUCT,
  GET_TAG_BY_ID_QUERY,
} from '@core/constants/query/query-keys';
import { environment } from '@environments/environment';
import { AuthHeaderService } from '@core/services/auth-header/auth-header.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly httpClient = inject(HttpClient);
  private readonly authHeaderService = inject(AuthHeaderService);
  private readonly query = injectQuery();

  getProductByCategory(categoryId: string) {
    const baseUrl = `${environment.BASE_WP_CUSTOM_API_URL}/products/category/${categoryId}`;

    return this.query({
      queryKey: [GET_PRODUCT, categoryId] as const,
      queryFn: () => {
        return this.httpClient.get<Product[]>(baseUrl, {
          headers: this.authHeaderService.authHeader,
        });
      },
    });
  }

  getProductById(productId: string) {
    const baseUrl = `${environment.BASE_WP_CUSTOM_API_URL}/products/${productId}`;

    return this.query({
      queryKey: [GET_PRODUCT, productId] as const,
      queryFn: () => {
        return this.httpClient.get<Product>(baseUrl, {
          headers: this.authHeaderService.authHeader,
        });
      },
    });
  }

  getProductsByTag(tagId: number) {
    return this.query({
      queryKey: [GET_TAG_BY_ID_QUERY + tagId] as const,
      queryFn: () => {
        return this.httpClient.get<Product[]>(
          `${environment.BASE_WP_CUSTOM_API_URL}/products/tag/${tagId}`,
          { headers: this.authHeaderService.authHeader },
        );
      },
    });
  }
}
