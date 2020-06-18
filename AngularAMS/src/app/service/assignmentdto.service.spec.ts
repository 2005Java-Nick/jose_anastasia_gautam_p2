import { TestBed } from '@angular/core/testing';

import { AssignmentdtoService } from './assignmentdto.service';

describe('AssignmentdtoService', () => {
  let service: AssignmentdtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentdtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
