import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTileImageComponent } from './product-tile-image.component';

describe('ProductTileImageComponent', () => {
  let component: ProductTileImageComponent;
  let fixture: ComponentFixture<ProductTileImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTileImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductTileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
