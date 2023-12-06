import { TestBed } from '@angular/core/testing';

import { AddgroupstudentService } from './addgroupstudent.service';

describe('AddgroupstudentService', () => {
  let service: AddgroupstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddgroupstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
