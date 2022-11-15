import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:3000/login';
  constructor(private http: HttpClient) {}
  userSignUp(data: any) {
    return this.http.post(this.url, data);
  }
  // getUser(){
  //   return this.http.get(this.url);
  // }
}
