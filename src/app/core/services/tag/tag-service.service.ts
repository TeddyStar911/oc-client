import { inject, Injectable } from '@angular/core';
import { injectQuery } from '@ngneat/query';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '@core/types/product/product';
import { GET_TAG_BY_ID_QUERY } from '@core/constants/query/query-keys';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TagService {
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

  getTagById(id: number) {
    return this.query({
      queryKey: [GET_TAG_BY_ID_QUERY + id] as const,
      queryFn: () => {
        return this.httpClient.get<Product[]>(
          `${environment.BASE_WP_API_URL}/products?tag=${id}`,
          { headers: this.authHeader },
        );
      },
    });
  }
}
