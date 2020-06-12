import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTakeDashboardComponent } from './student-take-dashboard.component';

describe('StudentTakeDashboardComponent', () => {
  let component: StudentTakeDashboardComponent;
  let fixture: ComponentFixture<StudentTakeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTakeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTakeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
