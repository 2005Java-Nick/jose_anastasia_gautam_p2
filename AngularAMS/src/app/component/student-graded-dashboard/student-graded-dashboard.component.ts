import { Component, OnInit } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';
import {SidebarOptionsService} from '../../service/sidebar-options.service';
import {AssignmentdtoService } from '../../service/assignmentdto.service';
import {Router} from '@angular/router';
import { AssignmentDTO } from 'src/app/interface/assignmentdto.interface';

@Component({
  selector: 'app-student-graded-dashboard',
  templateUrl: './student-graded-dashboard.component.html',
  styleUrls: ['./student-graded-dashboard.component.css']
})
export class StudentGradedDashboardComponent implements OnInit {

  name = 'John Doe';
  viewer = 'Student';

  sidebarOptions;

  listOfAssignments= [];
  dtoList: AssignmentDTO[];
    // {
    //   course: "History",
    //   assignmentType: "Exam",
    //   assignmentStatus: "Graded",
    //   assignmentName: "US History (1600s-1776)",
    //   teacherName: "Mrs. Jane Doe",
    //   studentName: "John Doe",
    //   dueDate: {
    //     date: "06-10-2020",
    //     time: "5:00 PM"
    //   },
    //   completionDate: {
    //     date: "06-10-2020",
    //     time: "4:45 PM"
    //   },
    //   gradedDate: {
    //     date: "06-11-2020",
    //     time: "7:45 PM"
    //   },
    //   grade: 80
    // }
  // ];


  constructor(private sidebarOptionsService:SidebarOptionsService, private adtoService: AssignmentdtoService, private router: Router) { 
     this.sidebarOptions = sidebarOptionsService.studentSideOptions("/student-graded-dashboard");
  }

  ngOnInit(): void {
    this.adtoService.getGradedAssignmentsStudent().subscribe((dto)=>{
      console.log('List of assignment is ' + dto);
      if(dto === null){
        this.router.navigate(['/login']);
      }
      else{
        this.dtoList = dto;
      }

    })
  }

}
