import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewGradedComponent } from './student-view-graded.component';

describe('StudentViewGradedComponent', () => {
  let component: StudentViewGradedComponent;
  let fixture: ComponentFixture<StudentViewGradedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentViewGradedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewGradedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
