import { Component, OnInit } from '@angular/core';
import { SidebarOptionsService } from '../../service/sidebar-options.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  sidebarOptions;

  constructor(sidebarOptionsService : SidebarOptionsService) {
    this.sidebarOptions = sidebarOptionsService.loginRegisterSideOptions("/login");
  }

  ngOnInit(): void {
  }

}
