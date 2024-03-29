import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { CreateATService } from "../../service/create-at.service";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {

  questions : number[] = [0];

  createAssignmentForm : FormGroup = this.fb.group({
    assignmentType: [''],
    assignmentTitle: [''],
    assignToClass: [''],
    assignToSchool: [''],
    dueDate:[''],
    dueTime:[''],
    question0: [''],
    point0: ['']
  });

  get diagnostic() { 
    return JSON.stringify(this.createAssignmentForm.value);
    };

  constructor(private fb : FormBuilder, private createAT : CreateATService) { }

  ngOnInit(): void {
  }

  addQuestion() {
    let newQuestion;
    if (this.questions.length === 0) {
      newQuestion = 0;
    } else {
      newQuestion = this.questions[this.questions.length - 1] + 1;
    }
    let label = "question" + newQuestion;
    let formControl = new FormControl('');
    this.createAssignmentForm.addControl(label, formControl);
    label = "point" + newQuestion;
    formControl = new FormControl('');
    this.createAssignmentForm.addControl(label, formControl);
    this.questions.push(newQuestion);
  }

  removeQuestion(i : number) {
    let index = this.questions.indexOf(i);
    this.questions.splice(index, 1);
    this.createAssignmentForm.removeControl("question" + i);
    this.createAssignmentForm.removeControl("point" + i);
  }

  onSubmit() {
    let submitObject = {
      questions: this.questions,
      form: this.createAssignmentForm.value
    }
    console.log(submitObject);
    this.createAT.createAndAssign(submitObject);
  }

}
