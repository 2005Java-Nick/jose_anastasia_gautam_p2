import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  userId: number = null;
  password: string = null;
  token: string = null;

  reset() {
    this.userId = null;
    this.password = null;
    this.token = null;
    console.log('Reset id, password and token to null');
  }

  getUserId() {
    return this.userId;
  }

  getPassword() { 
    return this.password;
  }

  getToken() {
    return this.token;
  }

  set(userId: number, password: string, token: string){
    this.userId = userId;
    this.password = password;
    this.token = token;
    console.log('Set user id, password and token');
  }

  constructor() { }
}
