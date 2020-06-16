import { Component, OnInit } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';
import { SidebarOptionsService } from '../../service/sidebar-options.service';

@Component({
  selector: 'app-teacher-grade-completed',
  templateUrl: './teacher-grade-completed.component.html',
  styleUrls: ['./teacher-grade-completed.component.css']
})
export class TeacherGradeCompletedComponent implements OnInit {

  assignment : AssignmentInstanceDisplay = {
    course: "History",
    assignmentType: "Exam",
    assignmentStatus: "COMPLETED",
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
