import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderAdminComponent } from './calender-admin.component';

describe('CalenderAdminComponent', () => {
  let component: CalenderAdminComponent;
  let fixture: ComponentFixture<CalenderAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalenderAdminComponent]
    });
    fixture = TestBed.createComponent(CalenderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
