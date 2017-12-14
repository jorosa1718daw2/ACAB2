import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaminantsComponent } from './contaminants.component';

describe('ContaminantsComponent', () => {
  let component: ContaminantsComponent;
  let fixture: ComponentFixture<ContaminantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaminantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaminantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
