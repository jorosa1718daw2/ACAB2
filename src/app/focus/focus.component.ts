import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';


interface FocusResponse {
  id_focus: string;
  codi: string;
  tag: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent {

  focus: Array<FocusResponse>;

  constructor(private http: HttpClient) {
    this.getFocus();
  }

  getFocus(): void {
    this.http.get<FocusResponse[]>('http://localhost:3000/focus')
      .subscribe(data => {
       // console.log(data);
        this.focus = data;

      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-Side Error Ocurred")
        } else {
          console.log("Server-side Error Ocurred")
        }
      });

  }
}
