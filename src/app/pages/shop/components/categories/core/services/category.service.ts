import { inject, Injectable } from '@angular/core';
import { injectQuery } from '@ngneat/query';
import { HttpClient } from '@angular/common/http';
import { Category } from '@pages/shop/components/categories/core/types/category/category';
import { environment } from '@environments/environment';
import { AuthHeaderService } from '@core/services/auth-header/auth-header.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly httpClient = inject(HttpClient);
  private readonly authHeaderService = inject(AuthHeaderService);
  private readonly query = injectQuery();

  getCategories() {
    return this.query({
      queryKey: ['categories'] as const,
      queryFn: () => {
        return this.httpClient.get<Category[]>(
          `${environment.BASE_WP_API_URL}/products/categories`,
          { headers: this.authHeaderService.authHeader },
        );
      },
    });
  }
}
