import { Component, OnInit } from '@angular/core';
import {SidebarOptionsService} from '../../service/sidebar-options.service';

@Component({
  selector: 'app-teacher-create-dashboard',
  templateUrl: './teacher-create-dashboard.component.html',
  styleUrls: ['./teacher-create-dashboard.component.css']
})
export class TeacherCreateDashboardComponent implements OnInit {
  
  sidebarOptions;

  constructor(sidebarOptionsService:SidebarOptionsService) { 
    this.sidebarOptions = sidebarOptionsService.teacherSideOptions("/teacher-create-dashboard");
  }

  ngOnInit(): void {
  }

}
