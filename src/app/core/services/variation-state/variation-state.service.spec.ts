import { TestBed } from '@angular/core/testing';

import { VariationStateService } from './variation-state.service';

describe('VariationStateService', () => {
  let service: VariationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
