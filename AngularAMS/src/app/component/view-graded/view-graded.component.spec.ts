import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGradedComponent } from './view-graded.component';

describe('ViewGradedComponent', () => {
  let component: ViewGradedComponent;
  let fixture: ComponentFixture<ViewGradedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGradedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGradedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
