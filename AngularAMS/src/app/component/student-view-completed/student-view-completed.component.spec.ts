import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewCompletedComponent } from './student-view-completed.component';

describe('StudentViewCompletedComponent', () => {
  let component: StudentViewCompletedComponent;
  let fixture: ComponentFixture<StudentViewCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentViewCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
