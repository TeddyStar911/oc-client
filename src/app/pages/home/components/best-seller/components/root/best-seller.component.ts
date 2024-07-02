import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatList, MatListItem } from '@angular/material/list';
import { ObservableQueryResult } from '@ngneat/query';
import { BestSellerService } from '@pages/home/components/best-seller/core/services/best-seller.service';
import { Product } from '@core/types/product/product';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from '@includes/loader/components/root/loader.component';
import { ProductTileComponent } from '@includes/product-tile/components/root/product-tile.component';
import { ErrorLoadingDataComponent } from '@includes/error-loading-data/components/root/error-loading-data.component';
import { BestSellerGridComponent } from '@pages/home/components/best-seller/components/best-seller-grid/best-seller-grid.component';

@Component({
  selector: 'oc-client-best-seller',
  standalone: true,
  imports: [
    AsyncPipe,
    MatDivider,
    MatList,
    MatListItem,
    RouterLink,
    LoaderComponent,
    ProductTileComponent,
    ErrorLoadingDataComponent,
    BestSellerGridComponent,
  ],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss',
})
export class BestSellerComponent implements OnInit {
  bestSellerService = inject(BestSellerService);
  public products$: ObservableQueryResult<Product[]> | undefined;

  ngOnInit(): void {
    this.products$ = this.bestSellerService.getBestSeller().result$;
  }
}
