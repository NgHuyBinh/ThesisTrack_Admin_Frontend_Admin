import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectDialogComponent } from './effect-dialog.component';

describe('EffectDialogComponent', () => {
  let component: EffectDialogComponent;
  let fixture: ComponentFixture<EffectDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EffectDialogComponent]
    });
    fixture = TestBed.createComponent(EffectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
