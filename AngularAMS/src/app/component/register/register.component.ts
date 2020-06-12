import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { SidebarOptionsService } from '../../service/sidebar-options.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    userId: [''],
    userFirstName: [''],
    userLastName: [''],
    userEmail: [''],
    userPassword: [''],
    userClass: [''],
    userSchool: [''],
});

sidebarOptions;

headerTitle: string = "Welcome";

constructor(private sidebarOptionsService : SidebarOptionsService, private fb: FormBuilder) {
  this.sidebarOptions = sidebarOptionsService.loginRegisterSideOptions('/register');
}

submit() {
  console.log(this.registerForm.value);
}

  ngOnInit(): void {
  }

}
