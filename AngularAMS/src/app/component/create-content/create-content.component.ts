import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {

  createAssignmentForm : FormGroup = this.fb.group({
    assignmentType: [''],
    assignmentTitle: [''],
    assignTo: [''],
    questions: {
      0: [''] 
    }
  });

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.createAssignmentForm.value);
  }

}
