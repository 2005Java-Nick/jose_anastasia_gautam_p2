import { Component, OnInit } from '@angular/core';
import { SidebarOptionsService } from '../../service/sidebar-options.service'; 

@Component({
  selector: 'app-student-take-dashboard',
  templateUrl: './student-take-dashboard.component.html',
  styleUrls: ['./student-take-dashboard.component.css']
})
export class StudentTakeDashboardComponent implements OnInit {

  name = 'John Doe';
  viewer = 'Student';

  sidebarOptions;

  constructor(sidebarOptionsService:SidebarOptionsService) { 
    this.sidebarOptions = sidebarOptionsService.studentSideOptions("");
  }

  ngOnInit(): void {
  }

}
