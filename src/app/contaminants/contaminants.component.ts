import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

interface ContaminantResponse {
  id_contaminant_d: string;
  nom_contaminant_d: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './contaminants.component.html',
  styleUrls: ['./contaminants.component.css']
})
export class ContaminantsComponent {

  contaminants: Array<ContaminantResponse>;

  constructor(private http: HttpClient) {
    this.getContaminants();
  }


  getContaminants(): void {
    this.http.get<ContaminantResponse[]>('http://localhost:3000/contaminants')
      .subscribe(data => {
        console.log(data);
        this.contaminants = data;
    
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
