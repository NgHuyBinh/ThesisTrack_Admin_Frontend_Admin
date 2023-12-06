import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkstudentComponent } from './markstudent.component';

describe('MarkstudentComponent', () => {
  let component: MarkstudentComponent;
  let fixture: ComponentFixture<MarkstudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkstudentComponent]
    });
    fixture = TestBed.createComponent(MarkstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
