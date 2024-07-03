import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTileNameComponent } from './product-tile-name.component';

describe('ProductTileNameComponent', () => {
  let component: ProductTileNameComponent;
  let fixture: ComponentFixture<ProductTileNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTileNameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductTileNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
