import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellerGridComponent } from './best-seller-grid.component';

describe('BestSellerGridComponent', () => {
  let component: BestSellerGridComponent;
  let fixture: ComponentFixture<BestSellerGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellerGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BestSellerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
