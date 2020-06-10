import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor() { }

  name = 'Student';

  sidebarOptions = [
    {
      name: "New Assignments"
    },
    {
      name: "Completed Assignment"
    },
    {
      name: "Graded Assignments"
    }
  ];

  listOfAssignments = [
    {
      assignmentName: "History",
      subjectName: "Jane Doe"
    },
    {
      assignmentName: "Math",
      subjectName: "John Doe"
    }

  ];

  ngOnInit(): void {
  }

}
