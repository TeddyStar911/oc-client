import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '@pages/shop/components/categories/core/services/category.service';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ObservableQueryResult } from '@ngneat/query';
import { Category } from '@pages/shop/components/categories/core/types/category/category';
import { RouterLink } from '@angular/router';
import { CategoryItemComponent } from '@pages/shop/components/categories/components/category-item/category-item.component';
import { LoaderComponent } from '@includes/loader/components/root/loader.component';
import { ErrorLoadingDataComponent } from '@includes/error-loading-data/components/root/error-loading-data.component';

@Component({
  selector: 'oc-client-categories',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    RouterLink,
    CategoryItemComponent,
    LoaderComponent,
    ErrorLoadingDataComponent,
  ],
  templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit {
  categoryService = inject(CategoryService);
  public categories$: ObservableQueryResult<Category[]> | undefined;

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories().result$;
  }
}
