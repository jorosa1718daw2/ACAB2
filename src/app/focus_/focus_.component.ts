import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { MatCard } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { MomentModule } from 'angular2-moment';

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
  sensorId: number;
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
        let dummyAnalogCurrentData: AnalogData = {
            timeStamp: '2017-01-01',//moment().format('YYYY-MM-DD'),
            value: null,
            sensorId: null,
            statusCode: 0
          };
        this.focuses = data;
        this.getSensorCV();
        /*this.focuses.forEach((focus: Focus) => {
          focus.analyzers.forEach((analyzer: Analyzer) => {
            analyzer.sensors.forEach((sensor: Sensor) => {
              this.getSensorActualValue(sensor.sensorId)
                .subscribe((data: AnalogData) => {
                  sensor.currentValue = data;
                },
                (err: HttpErrorResponse) => {
                  console.log((err.error instanceof Error)?"Client-Side Error Ocurred":"Server-side Error Ocurred");
                  sensor.currentValue = [dummyAnalogCurrentData].slice(0)[0];
              });
            });
          })
        });*/

      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-Side Error Ocurred")
        } else {
          console.log("Server-side Error Ocurred")
        }
      });
  }

  getSensorCV() : void {
    let sensors: Array<Sensor> = [],
        dummyAnalogCurrentData: AnalogData = {
          timeStamp: '2017-01-01',//moment().format('YYYY-MM-DD'),
          value: null,
          sensorId: null,
          statusCode: 0
        };
    this.focuses.forEach((focus: Focus) => {
      focus.analyzers.forEach((analyzer: Analyzer) => {
        analyzer.sensors.forEach((sensor: Sensor) => {
          sensors.push(sensor);
        });
      });
    });
    //var counter = 5;
    setInterval(() => {
      sensors.forEach((sensor) => {
        this.getSensorActualValue(sensor.sensorId)
          .subscribe((data: AnalogData) => {
            sensor.currentValue = data;
            //sensor.currentValue.value += counter;
          },
          (err: HttpErrorResponse) => {
            console.log((err.error instanceof Error)?"Client-Side Error Ocurred":"Server-side Error Ocurred");
            sensor.currentValue = [dummyAnalogCurrentData].slice(0)[0];
        });
      });
      //counter += 5;
      //if (counter > 100)  counter = 0;
    },3000);
  }

  // Este tambien devolvera un array, pero solo con 1 posicion
  getSensorActualValue(sensorId: number) : any {
    return this.http.get<AnalogData>('http://192.168.10.12/api/sensor/'+sensorId+'/currentanalogdata');
    /*.subscribe(data => {
        return data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-Side Error Ocurred")
        } else {
          console.log("Server-side Error Ocurred")
        }
        return null;
    });*/
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
