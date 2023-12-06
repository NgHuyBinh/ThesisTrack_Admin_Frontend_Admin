import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttopicAdminComponent } from './studenttopic-admin.component';

describe('StudenttopicAdminComponent', () => {
  let component: StudenttopicAdminComponent;
  let fixture: ComponentFixture<StudenttopicAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudenttopicAdminComponent]
    });
    fixture = TestBed.createComponent(StudenttopicAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
