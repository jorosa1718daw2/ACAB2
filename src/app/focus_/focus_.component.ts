import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { MatCard } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
// import moment = require('moment'); AppModule

enum StatusCode { };

interface IdName {
  id: number;
  name: string;
};
interface MeasuringComponent extends IdName { };
interface Unit extends IdName { };
interface AnalogData {
  timeStamp: string; //moment.Moment | Date
  value: number;
  sensorId: number;
  statusCode: number;
};
interface Sensor {
  id: number;
  measuringComponent: MeasuringComponent;
  unit: Unit;
  unitId: number;
  measuringComponentId: number;
  analyzerId: number;
  currentValue?: AnalogData;
};
interface Analyzer {
  id: number;
  manufacturer: string;
  model: string;
  serialNumber: number;
  statusCode: StatusCode;
  sensors: Array<Sensor>;
  focusId: number;
  state?: any;
};
interface Focus {
  id: number;
  name: string;
  description: string;
  analyzers: Array<Analyzer>;
};

@Component({
  selector: 'app-focus_',
  templateUrl: './focus_.component.html',
  styleUrls: ['./focus_.component.css']
})
export class Focus_Component {
  focuses: Array<Focus>
  //measurements: Array<AnalogData>;

  constructor(private http: HttpClient) {
    this.focuses = [];
    //this.measurements = []; // aqui se mostraran los valores (historicos y tiempo real)
    this.getFocuses();
    
    
  }

  getFocuses(): void { // port: 63390
    this.http.get< Array<Focus> >('http://192.168.10.12/api/focus')
      .subscribe(data => {

        this.focuses = data; //.slice(0); // copia x valor
        this.focuses.forEach((focus: Focus) => {
          focus.analyzers.forEach((analyzer: Analyzer) => {
            analyzer.sensors.forEach((sensor: Sensor) => {
              sensor.currentValue = {
                timeStamp: '2017-01-01',
                value: 10.15,
                sensorId: sensor.id,
                statusCode: 1
              };
            });
          })
        });
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

  // Este tambien devolvera un array, pero solo con 1 posicion
  getSensorActualValue(sensorId: number): void {
    this.http.get< Array<AnalogData> >('http://192.168.10.12:63390/api/sensor/'+sensorId+'/currentanalogdata')
    .subscribe(data => {
        this.analogdata = data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-Side Error Ocurred")
        } else {
          console.log("Server-side Error Ocurred")
        }
    });
  }

  // Mirar como pasar la fecha: Date | moment.Moment | string
  /*getSensorHistoricalValues(sensorId: number, dateIni: moment.Moment, dateEnd: moment.Moment): void {
    let dInicial: string = dateIni.format('YYYY-MM-DD_HH:mm');
    let dFinal: string = dateEnd.format('YYYY-MM-DD_HH:mm');
    this.http.get<Array<AnalogData>>('http://192.168.10.12:63390/api/sensor/:id/historicalanalogdata')
      .subscribe(data => {

      });

  }*/

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
