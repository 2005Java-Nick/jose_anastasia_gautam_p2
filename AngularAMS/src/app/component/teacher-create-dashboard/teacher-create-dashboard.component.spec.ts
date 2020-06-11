import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCreateDashboardComponent } from './teacher-create-dashboard.component';

describe('TeacherCreateDashboardComponent', () => {
  let component: TeacherCreateDashboardComponent;
  let fixture: ComponentFixture<TeacherCreateDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCreateDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCreateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
