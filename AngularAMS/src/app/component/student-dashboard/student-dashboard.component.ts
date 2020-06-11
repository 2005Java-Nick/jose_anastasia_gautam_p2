import { Component, OnInit } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';
import { SidebarOptionsService} from '../../service/sidebar-options.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  name = 'John Doe';
  viewer = 'Student';

  sidebarOptions;

  listOfAssignments : AssignmentInstanceDisplay[] = [
    {
      course: "History",
      assignmentType: "Exam",
      assignmentStatus: "New",
      assignmentName: "US History (1600s-1776)",
      teacherName: "Mrs. Jane Doe",
      studentName: "John Doe",
      dueDate: {
        date: "06-10-2020",
        time: "5:00 PM"
      },
      completionDate: {
        date: null,
        time: null
      },
      grade: null
    }
  ];

  constructor(sidebarOptionsService:SidebarOptionsService) { 
    this.sidebarOptions = sidebarOptionsService.studentSideOptions("/student-dashboard");
  }
  ngOnInit(): void {
  }

}
