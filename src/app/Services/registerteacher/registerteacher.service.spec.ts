import { TestBed } from '@angular/core/testing';

import { RegisterteacherService } from './registerteacher.service';

describe('RegisterteacherService', () => {
  let service: RegisterteacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterteacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
