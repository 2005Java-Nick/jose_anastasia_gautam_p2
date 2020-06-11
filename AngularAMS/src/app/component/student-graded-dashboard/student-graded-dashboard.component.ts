import { Component, OnInit } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';
import {SidebarOptionsService} from '../../service/sidebar-options.service';

@Component({
  selector: 'app-student-graded-dashboard',
  templateUrl: './student-graded-dashboard.component.html',
  styleUrls: ['./student-graded-dashboard.component.css']
})
export class StudentGradedDashboardComponent implements OnInit {

  name = 'John Doe';
  viewer = 'Student';

  sidebarOptions;

  listOfAssignments : AssignmentInstanceDisplay[] = [
    {
      course: "History",
      assignmentType: "Exam",
      assignmentStatus: "Graded",
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
      grade: 80
    }
  ];


  constructor(sidebarOptionsService:SidebarOptionsService) { 
    this.sidebarOptions = sidebarOptionsService.studentSideOptions("/student-graded-dashboard");
  }

  ngOnInit(): void {
  }

}
