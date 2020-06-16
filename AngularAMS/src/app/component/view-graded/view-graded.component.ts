import { Component, OnInit } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';
import { SidebarOptionsService } from '../../service/sidebar-options.service';

@Component({
  selector: 'app-view-graded',
  templateUrl: './view-graded.component.html',
  styleUrls: ['./view-graded.component.css']
})
export class ViewGradedComponent implements OnInit {

  assignment : AssignmentInstanceDisplay = {
    course: "History",
    assignmentType: "Exam",
    assignmentStatus: "GRADED",
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
    gradedDate: {
      date: "06-11-2020",
      time: "7:45 PM"
    },
    grade: 80
 };

 sidebarOptions;

 constructor(sidebarOptionsService:SidebarOptionsService) { 
   this.sidebarOptions = sidebarOptionsService.studentSideOptions("");
 }

  ngOnInit(): void {
  }

}
