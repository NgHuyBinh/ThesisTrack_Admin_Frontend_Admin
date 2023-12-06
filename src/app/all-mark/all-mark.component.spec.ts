import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMarkComponent } from './all-mark.component';

describe('AllMarkComponent', () => {
  let component: AllMarkComponent;
  let fixture: ComponentFixture<AllMarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMarkComponent]
    });
    fixture = TestBed.createComponent(AllMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
