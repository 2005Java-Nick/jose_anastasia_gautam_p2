import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { SidebarOptionsService } from '../../service/sidebar-options.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isStudent = true;

  registerTeacherForm: FormGroup = this.fb.group({
    teacherId: [''],
    teacherFirstName: [''],
    teacherLastName: [''],
    teacherEmail: [''],
    teacherPassword: [''],
    teacherSubject: [''],
    teacherSchool: [''],
});


registerStudentForm: FormGroup = this.fb.group({
  studentId: [''],
  studentFirstName: [''],
  studentLastName: [''],
  studentEmail: [''],
  studentPassword: [''],
  studentClass: [''],
  studentSchool: [''],
});

sidebarOptions;

headerTitle: string = "Welcome";

constructor(private sidebarOptionsService : SidebarOptionsService, private fb: FormBuilder) {
  this.sidebarOptions = sidebarOptionsService.loginRegisterSideOptions('/register');
}

submit() {
  if (this.isStudent) {
    console.log(this.registerStudentForm.value);
  } else {
    console.log(this.registerTeacherForm.value);
  }
}

setUser(userType : boolean) {
  this.isStudent = userType;
}

  ngOnInit(): void {
  }

}
