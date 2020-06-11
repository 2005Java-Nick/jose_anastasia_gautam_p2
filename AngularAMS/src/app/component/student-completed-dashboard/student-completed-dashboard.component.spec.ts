import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompletedDashboardComponent } from './student-completed-dashboard.component';

describe('StudentCompletedDashboardComponent', () => {
  let component: StudentCompletedDashboardComponent;
  let fixture: ComponentFixture<StudentCompletedDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCompletedDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCompletedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
