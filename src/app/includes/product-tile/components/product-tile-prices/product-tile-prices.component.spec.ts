import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTilePricesComponent } from './product-tile-prices.component';

describe('ProductTilePricesComponent', () => {
  let component: ProductTilePricesComponent;
  let fixture: ComponentFixture<ProductTilePricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTilePricesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductTilePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
