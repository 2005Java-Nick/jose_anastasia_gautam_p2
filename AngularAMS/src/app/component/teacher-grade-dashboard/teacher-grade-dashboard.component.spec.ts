import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherGradeDashboardComponent } from './teacher-grade-dashboard.component';

describe('TeacherGradeDashboardComponent', () => {
  let component: TeacherGradeDashboardComponent;
  let fixture: ComponentFixture<TeacherGradeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherGradeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherGradeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
