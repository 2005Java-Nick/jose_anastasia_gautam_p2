import { Component, OnInit } from '@angular/core';
import {SidebarOptionsService} from '../../service/sidebar-options.service';

@Component({
  selector: 'app-teacher-grade-dashboard',
  templateUrl: './teacher-grade-dashboard.component.html',
  styleUrls: ['./teacher-grade-dashboard.component.css']
})
export class TeacherGradeDashboardComponent implements OnInit {

  name = 'Mrs. Jane Doe';
  viewer = 'Teacher';

  sidebarOptions;
  
  constructor(sidebarOptionsService:SidebarOptionsService) { 
    this.sidebarOptions = sidebarOptionsService.teacherSideOptions("");
  }

  ngOnInit(): void {
  }

}
