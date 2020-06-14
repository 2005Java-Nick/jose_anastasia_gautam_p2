import { Component, OnInit } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';

@Component({
  selector: 'app-take-content',
  templateUrl: './take-content.component.html',
  styleUrls: ['./take-content.component.css']
})
export class TakeContentComponent implements OnInit {

  assignment : AssignmentInstanceDisplay = {
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
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
