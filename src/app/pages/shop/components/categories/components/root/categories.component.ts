import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '@pages/shop/components/categories/core/services/category.service';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ObservableQueryResult } from '@ngneat/query';
import { Category } from '@pages/shop/components/categories/core/types/category/category';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'oc-client-categories',
  standalone: true,
  imports: [AsyncPipe, NgForOf, MatListModule, MatDividerModule],
  templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit {
  categoryService = inject(CategoryService);
  public categories$: ObservableQueryResult<Category[]> | undefined;

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories().result$;
    /* this.categories$.subscribe((r) => console.log(r.data));*/
  }
}
