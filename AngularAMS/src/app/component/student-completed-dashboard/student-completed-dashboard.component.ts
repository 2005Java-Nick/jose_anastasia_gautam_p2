import { Component, OnInit } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';
import {SidebarOptionsService} from '../../service/sidebar-options.service';

@Component({
  selector: 'app-student-completed-dashboard',
  templateUrl: './student-completed-dashboard.component.html',
  styleUrls: ['./student-completed-dashboard.component.css']
})
export class StudentCompletedDashboardComponent implements OnInit {

  name = 'John Doe';
  viewer = 'Student';

  sidebarOptions;

  listOfAssignments : AssignmentInstanceDisplay[] = [
    {
      course: "History",
      assignmentType: "Exam",
      assignmentStatus: "Completed",
      assignmentName: "US History (1600s-1776)",
      teacherName: "Mrs. Jane Doe",
      studentName: "John Doe",
      dueDate: {
        date: "06-10-2020",
        time: "5:00 PM"
      },
      completionDate: {
        date: "06-10-2020",
        time: "4:45 PM"
      },
      grade: null
    }
  ];
  
  constructor(sidebarOptionsService:SidebarOptionsService) { 
    this.sidebarOptions = sidebarOptionsService.studentSideOptions("/student-completed-dashboard");
  }

  ngOnInit(): void {
  }

}
