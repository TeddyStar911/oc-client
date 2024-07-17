import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@pages/shop/components/categories/core/services/category.service';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ObservableQueryResult } from '@ngneat/query';
import { Category } from '@pages/shop/components/categories/core/types/category/category';
import { Router, RouterLink } from '@angular/router';
import { CategoryItemComponent } from '@pages/shop/components/categories/components/category-item/category-item.component';
import { LoaderComponent } from '@includes/loader/loader.component';
import { ErrorLoadingDataComponent } from '@includes/error-loading-data/error-loading-data.component';
import { FormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

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
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
  ],
  templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit {
  public categories$: ObservableQueryResult<Category[]> | undefined;
  category: string;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories().result$;
  }

  onCategoryChange(category: string) {
    console.log(category);
    this.router.navigate(['/shop'], { queryParams: { category: category } });
  }
}
