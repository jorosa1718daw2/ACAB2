import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  results = '';



  constructor(private http: HttpClient) {
  }


  //getUsers(): void {
  ngOnInit(): void {
    this.http.get<UserResponse>('http://localhost:3000/users').subscribe(data => {
      console.log(data);
      console.log("Email: " + data.email);
      console.log("ID : " + data.id);
      console.log("Password: " + data.password);
      console.log("User login: " + data.username);
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side Error Occured")
        } else {
          console.log("Sever-side Error Ocurred")
        }
      });

    interface UserResponse {
      id: number;
      username: string;
      password: string;
      email: string;
    }
  }


}



