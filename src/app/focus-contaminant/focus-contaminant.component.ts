import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import moment = require('moment');



enum StatusCode { };

interface IdName {
  id: number;
  name: string;
};

interface MeasuringComponent extends IdName { };
interface Unit extends IdName { };

interface AnalogData {
  timeStamp: string; // Esto se deberia transformar a Date o a moment (mirar locale/UTC...)
  value: number;
  sensorId: number;
};

interface Sensor {
  id: number;
  measuringComponent: MeasuringComponent;
  unit: Unit;
  unitId: number;
  measuringComponentId: number;
  analyzerId: number;
};

interface Analyzer {
  id: number;
  manufacturer: string;
  model: string;
  serialNumber: number;
  statusCode: StatusCode;
  sensors: Array<Sensor>;
  focusId: number;
};

interface Focus {
  id: number;
  name: string;
  description: string;
  analyzers: Array<Analyzer>;
};

@Component({
  selector: 'app-focus-contaminant',
  templateUrl: './focus-contaminant.component.html',
  styleUrls: ['./focus-contaminant.component.css']
})
export class FocusContaminantComponent {

  focuscontaminant: Array<Focus>;
  // cada uno de estos serviran como models para los distintos ngFor
  focuses: Array<Focus>
  analyzers: Array<Analyzer>;
  sensors: Array<Sensor>;
  //measurements: Array<AnalogData>;

  constructor(private http: HttpClient) {
    this.focuses = [];
    //this.analyzers = [];
    //this.sensors = [];
    //this.measurements = []; // aqui se mostraran los valores (historicos y tiempo real)
    this.getFocusContaminants();
    //this.getAnalyzers();
  }
  

  // Mirar como pasar la fecha: Date | moment.Moment | string
  getSensorHistoricalValues(sensorId: number, dateIni: moment.Moment, dateEnd: moment.Moment): void {
    let dInicial: string = dateIni.format('YYYY-MM-DD_HH:mm');
    let dFinal: string = dateEnd.format('YYYY-MM-DD_HH:mm');
    this.http.get<Array<AnalogData>>('http://192.168.10.12:63390/api/sensor/:id/historicalanalogdata')
      .subscribe(data => {

      });

  }

  // Este tambien devolvera un array, pero solo con 1 posicion
  getSensorActualValue(sensorId: number): void {
    this.http.get<Array<AnalogData>>('http://192.168.10.12:63390/api/sensor/:id/currentanalogdata')
    .subscribe(data => {
        //this.measurements = data;
    });
  }



  getFocusContaminants(): void {
    this.http.get<Array<Focus>>('http://192.168.10.12:63390/api/focus')
      .subscribe(data => {
        console.log(data);
        this.focuscontaminant = data;
        this.focuses = data.slice(0); // copia x valor
        /*if (Array.isArray(this.focuses) && this.focuses.length) {
          this.analyzers
        }
        if (this.selectedFocus) this.selectedAnalyzer = this.selectedFocus[0];
        if (this.selectedAnalyzer) this.selectedSensor = this.selectedAnalyzer[0];*/

      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-Side Error Ocurred")
        } else {
          console.log("Server-side Error Ocurred")
        }
      });
  }


  /*getAnalyzers(): void {
    this.http.get<Array<Analyzer>>('http://192.168.10.12:63390/api/analyzer').subscribe(data => {
        this.analyzers = data;

      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-Side Error Ocurred")
        } else {
          console.log("Server-side Error Ocurred")
        }
      });
  }*/

}
