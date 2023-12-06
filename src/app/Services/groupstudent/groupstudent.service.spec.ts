import { TestBed } from '@angular/core/testing';

import { GroupstudentService } from './groupstudent.service';

describe('GroupstudentService', () => {
  let service: GroupstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
