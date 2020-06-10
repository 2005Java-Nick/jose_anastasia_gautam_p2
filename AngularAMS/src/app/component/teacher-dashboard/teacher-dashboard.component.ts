import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  constructor() { }

  name = 'Teacher';

  sidebarOptions = [
    {
      name: "Completed Assignments"
    },
    {
      name: "Graded Assignments"
    },
    {
      name: "Create an Assignment"
    }
  ];

  listOfAssignments = [
    {
      assignmentName: "History",
      studentName: "Jane Doe"
    },
    {
      assignmentName: "Math",
      studentName: "John Doe"
    }

  ];


  ngOnInit(): void {
  }

}
