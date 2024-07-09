import { inject, Injectable } from '@angular/core';
import { injectQuery } from '@ngneat/query';
import { HttpClient } from '@angular/common/http';
import { Product } from '@core/types/product/product';
import {
  GET_PRODUCT,
  GET_PRODUCTS,
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

  getProducts(categoryId: string, count: string) {
    const baseUrl = `${environment.BASE_WP_API_URL}/products`;
    const params = new URLSearchParams({ per_page: count });

    if (categoryId) {
      params.append('category', categoryId);
    }

    const fullUrl = `${baseUrl}?${params.toString()}`;

    return this.query({
      queryKey: [GET_PRODUCTS, categoryId] as const,
      queryFn: () => {
        return this.httpClient.get<Product[]>(fullUrl, {
          headers: this.authHeaderService.authHeader,
        });
      },
    });
  }

  getProductById(productId: string) {
    const baseUrl = `${environment.BASE_WP_API_URL}/products/${productId}`;

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
          `${environment.BASE_WP_API_URL}/products?tag=${tagId}`,
          { headers: this.authHeaderService.authHeader },
        );
      },
    });
  }
}
