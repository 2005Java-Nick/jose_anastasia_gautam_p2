import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherGradedDashboardComponent } from './teacher-graded-dashboard.component';

describe('TeacherGradedDashboardComponent', () => {
  let component: TeacherGradedDashboardComponent;
  let fixture: ComponentFixture<TeacherGradedDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherGradedDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherGradedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
