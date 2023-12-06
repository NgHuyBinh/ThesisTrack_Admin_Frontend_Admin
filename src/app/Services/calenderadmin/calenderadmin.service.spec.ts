import { TestBed } from '@angular/core/testing';

import { CalenderadminService } from './calenderadmin.service';

describe('CalenderadminService', () => {
  let service: CalenderadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalenderadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
