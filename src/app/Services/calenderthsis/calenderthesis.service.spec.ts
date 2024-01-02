import { TestBed } from '@angular/core/testing';

import { CalenderthesisService } from './calenderthesis.service';

describe('CalenderthesisService', () => {
  let service: CalenderthesisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalenderthesisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
