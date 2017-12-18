import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusContaminantComponent } from './focus-contaminant.component';

describe('FocusContaminantComponent', () => {
  let component: FocusContaminantComponent;
  let fixture: ComponentFixture<FocusContaminantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusContaminantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusContaminantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
