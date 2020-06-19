import { TestBed } from '@angular/core/testing';

import { CreateATService } from './create-at.service';

describe('CreateATService', () => {
  let service: CreateATService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateATService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
