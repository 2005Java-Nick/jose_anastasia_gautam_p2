import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherGradeCompletedComponent } from './teacher-grade-completed.component';

describe('TeacherGradeCompletedComponent', () => {
  let component: TeacherGradeCompletedComponent;
  let fixture: ComponentFixture<TeacherGradeCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherGradeCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherGradeCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
