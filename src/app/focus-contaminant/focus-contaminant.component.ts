import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';


//TODO: Crear vistas!
interface Focus {
  id: number;
  name: string;
  description: string;
  analyzers: Array<Analyzer>;
}

interface Analyzer {
  id: number;
  focusId: number;
  manufacturer: string;
  model: string;
  serialNumber: number;
  sensors: Array<sensor>;
}

interface sensor {
  id: number;
  analyzerId: number;
  measuringComponentId: string;
  unitId: number;
  measuringComponents: Array<measuringComponent>;
}
interface measuringComponent{
  id: number;
  name: string;
}

interface unit {
  id: number;
  name:string;
}
interface currentAnalogData {
  id: number;
  timeStamp: string;
  value: number;
  sensorId: number;
}


@Component({
  selector: 'app-focus-contaminant',
  templateUrl: './focus-contaminant.component.html',
  styleUrls: ['./focus-contaminant.component.css']
})
export class FocusContaminantComponent {
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
