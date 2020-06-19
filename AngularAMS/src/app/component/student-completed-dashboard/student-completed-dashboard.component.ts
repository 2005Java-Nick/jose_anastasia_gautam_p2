import { Component, OnInit } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';
import {SidebarOptionsService} from '../../service/sidebar-options.service';
import {AssignmentdtoService } from '../../service/assignmentdto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-completed-dashboard',
  templateUrl: './student-completed-dashboard.component.html',
  styleUrls: ['./student-completed-dashboard.component.css']
})
export class StudentCompletedDashboardComponent implements OnInit {

  name = 'John Doe';
  viewer = 'Student';

  sidebarOptions;

  listOfAssignments= []
  //   {
  //     course: "History",
  //     assignmentType: "Exam",
  //     assignmentStatus: "Completed",
  //     assignmentName: "US History (1600s-1776)",
  //     teacherName: "Mrs. Jane Doe",
  //     studentName: "John Doe",
  //     dueDate: {
  //       date: "06-10-2020",
  //       time: "5:00 PM"
  //     },
  //     completionDate: {
  //       date: "06-10-2020",
  //       time: "4:45 PM"
  //     },
  //     gradedDate: {
  //       date: "06-11-2020",
  //       time: "7:45 PM"
  //     },
  //     grade: null
  //   }
  // ];
  
  constructor(private sidebarOptionsService:SidebarOptionsService, private adtoService: AssignmentdtoService, private router: Router) { 
    this.sidebarOptions = sidebarOptionsService.studentSideOptions("/student-completed-dashboard");
  }

  ngOnInit(): void {
    this.adtoService.getCompletedAssignmentsStudent().subscribe((dto)=>{
      console.log('List of assignment is ' + dto);
      if(dto === null){
        this.router.navigate(['/login']);
      }
      else{
        this.listOfAssignments = dto;
      }

    })
  }

}
