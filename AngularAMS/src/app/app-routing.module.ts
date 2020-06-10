import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherDashboardComponent } from './component/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';


const routes: Routes = [
  { path: "teacher-dashboard", component: TeacherDashboardComponent },
  { path: "student-dashboard", component: StudentDashboardComponent },
  { path: "", redirectTo: "/student-dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
