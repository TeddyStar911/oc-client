import { inject, Injectable } from '@angular/core';
import { injectQuery } from '@ngneat/query';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '@core/types/product/product';
import { GET_TAG_BY_ID_QUERY } from '@core/constants/query/query-keys';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private readonly httpClient = inject(HttpClient);
  private readonly query = injectQuery();
  private readonly authHeader = this.createBasicAuthHeader(
    'ck_f2ee1ac6be680138cec609ebd77c2078ec1fd370',
    'cs_46c88cfbbdcbd8f7c919250e113cf05fd4a2fc0d',
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
          `https://cms.shop-ua.site/wp-json/wc/v3/products?tag=${id}`,
          { headers: this.authHeader },
        );
      },
    });
  }
}
