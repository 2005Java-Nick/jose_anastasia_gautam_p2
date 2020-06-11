import { TestBed } from '@angular/core/testing';

import { SidebarOptionsService } from './sidebar-options.service';

describe('SidebarOptionsService', () => {
  let service: SidebarOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
