import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchTopicComponent } from './research-topic.component';

describe('ResearchTopicComponent', () => {
  let component: ResearchTopicComponent;
  let fixture: ComponentFixture<ResearchTopicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchTopicComponent]
    });
    fixture = TestBed.createComponent(ResearchTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
