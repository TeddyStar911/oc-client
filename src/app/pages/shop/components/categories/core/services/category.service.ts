import { inject, Injectable } from '@angular/core';
import { injectQuery } from '@ngneat/query';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '@pages/shop/components/categories/core/types/category/category';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly httpClient = inject(HttpClient);
  private readonly query = injectQuery();
  private readonly authHeader = this.createBasicAuthHeader(
    environment.WP_API_USERNAME,
    environment.WP_API_PASSWORD,
  );
  constructor() {}

  private createBasicAuthHeader(
    username: string,
    password: string,
  ): HttpHeaders {
    const encodedCredentials = btoa(`${username}:${password}`);
    return new HttpHeaders({
      Authorization: `Basic ${encodedCredentials}`,
    });
  }

  getCategories() {
    return this.query({
      queryKey: ['categories'] as const,
      queryFn: () => {
        return this.httpClient.get<Category[]>(
          `${environment.BASE_WP_API_URL}/products/categories`,
          { headers: this.authHeader },
        );
      },
    });
  }
}
