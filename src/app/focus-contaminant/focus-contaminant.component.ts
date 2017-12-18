import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

interface Analyzer {
  id: number;
  
}

interface Focus {
  id: number;
  name: string;
  description: string;
  analyzers: Array<Analyzer>;
}




@Component({
  selector: 'app-focus-contaminant',
  templateUrl: './focus-contaminant.component.html',
  styleUrls: ['./focus-contaminant.component.css']
})
export class FocusContaminantComponent {
 // contaminants: Array<FocusContaminantResponse>;
  focuscontaminant: Array<Focus>;

  constructor(private http: HttpClient) {
    this.getFocusContaminants();
    
  }
  getFocusContaminants(): void {
    this.http.get<Focus[]>('http://192.168.10.12:63390/api/focus')
      .subscribe(data => {
        console.log(data);
        this.focuscontaminant = data;

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
