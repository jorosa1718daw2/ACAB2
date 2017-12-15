import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { FocusComponent } from './focus.component';

describe('FocusComponent', () => {
  let component: FocusComponent;
  let fixture: ComponentFixture<FocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
