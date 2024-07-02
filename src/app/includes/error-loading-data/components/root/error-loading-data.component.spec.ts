import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLoadingDataComponent } from './error-loading-data.component';

describe('ErrorLoadingDataComponent', () => {
  let component: ErrorLoadingDataComponent;
  let fixture: ComponentFixture<ErrorLoadingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorLoadingDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorLoadingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
