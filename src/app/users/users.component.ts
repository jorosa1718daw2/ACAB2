import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import {MatTabsModule} from '@angular/material/tabs';


interface UserResponse {
  id: number;
  username: string;
  password: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  title = 'app';
  results: Array<UserResponse>;
  constructor(private http: HttpClient) {
    this.getUser();
  }

  getUser(): void {
    this.http.get<UserResponse[]>('http://localhost:3000/users').subscribe(data => {
     // console.log(data);
      this.results = data;//['results'];
     // for(let i in data){
     // console.log("Email: " + data[i].email);
     // console.log("ID : " + data[i].id);
     // console.log("Password: " + data[i].password);
     // console.log("User login: " + data[i].username);}
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side Error Occured")
        } else {
          console.log("Sever-side Error Ocurred")
        }
      });
  }
}



