import { TestBed } from '@angular/core/testing';

import { GroupStudentStudentService } from './group-student-student.service';

describe('GroupStudentStudentService', () => {
  let service: GroupStudentStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupStudentStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
