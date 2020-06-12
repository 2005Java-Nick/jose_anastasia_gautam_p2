import { Component, OnInit } from '@angular/core';
import { SidebarOptionsService } from '../../service/sidebar-options.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  sidebarOptions;

  constructor(sidebarOptionsService : SidebarOptionsService) {
    this.sidebarOptions = sidebarOptionsService.loginRegisterSideOptions("/register");
  }
  ngOnInit(): void {
  }

}
