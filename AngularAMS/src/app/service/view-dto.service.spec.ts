import { TestBed } from '@angular/core/testing';

import { ViewDTOService } from './view-dto.service';

describe('ViewDTOService', () => {
  let service: ViewDTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewDTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
