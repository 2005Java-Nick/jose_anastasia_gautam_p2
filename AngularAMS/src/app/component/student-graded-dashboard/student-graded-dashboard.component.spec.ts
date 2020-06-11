import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGradedDashboardComponent } from './student-graded-dashboard.component';

describe('StudentGradedDashboardComponent', () => {
  let component: StudentGradedDashboardComponent;
  let fixture: ComponentFixture<StudentGradedDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGradedDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGradedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
