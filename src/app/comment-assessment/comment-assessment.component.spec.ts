import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentAssessmentComponent } from './comment-assessment.component';

describe('CommentAssessmentComponent', () => {
  let component: CommentAssessmentComponent;
  let fixture: ComponentFixture<CommentAssessmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentAssessmentComponent]
    });
    fixture = TestBed.createComponent(CommentAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
