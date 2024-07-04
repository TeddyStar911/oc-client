import { inject, Injectable } from '@angular/core';
import { injectQuery } from '@ngneat/query';
import { HttpClient } from '@angular/common/http';
import { Product } from '@core/types/product/product';
import { GET_TAG_BY_ID_QUERY } from '@core/constants/query/query-keys';
import { environment } from '@environments/environment';
import { AuthHeaderService } from '@core/services/auth-header/auth-header.service';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private readonly httpClient = inject(HttpClient);
  private readonly authHeaderService = inject(AuthHeaderService);
  private readonly query = injectQuery();

  getTagById(id: number) {
    return this.query({
      queryKey: [GET_TAG_BY_ID_QUERY + id] as const,
      queryFn: () => {
        return this.httpClient.get<Product[]>(
          `${environment.BASE_WP_API_URL}/products?tag=${id}`,
          { headers: this.authHeaderService.authHeader },
        );
      },
    });
  }
}
