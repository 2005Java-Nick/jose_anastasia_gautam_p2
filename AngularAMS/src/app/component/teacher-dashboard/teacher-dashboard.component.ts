import { Component, OnInit } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';

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
      name: "Completed Assignments",
      link: "/teacher-dashboard"
    },
    {
      name: "Graded Assignments",
      link: "/teacher-graded-dashboard"
    },
    {
      name: "Create an Assignment",
      link: "/teacher-dashboard"
    }
  ];

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


  ngOnInit(): void {
  }

}
