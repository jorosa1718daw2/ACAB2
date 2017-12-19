import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

//TODO: Crear vistas!

enum StatusCode {};

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
  /* Al final estos 2 iran por separado */
  //historicalAnalogData: Array<any>; // Por definir
  //currentAnalogData: CurrentAnalogData;
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
  selectedFocus: Focus;
  selectedAnalyzer: Analyzer;
  selectedSensor: Sensor;
  measurements: Array<AnalogData>;

  constructor(private http: HttpClient) {
    this.focuses = [];
    this.selectedFocus = null;
    this.selectedAnalyzer = null;
    this.selectedSensor = null;
    this.measurements = []; // aqui se mostraran los valores (historicos y tiempo real)
    this.getFocusContaminants();
  }

  // Mirar como pasar la fecha: Date | moment.Moment | string
  getSensorHistoricalValues(sensorId: number, dateIni: string, dateEnd: string)

  // Este tambien devolvera un array, pero solo con 1 posicion
  getSensorActualValue(sensorId: number)


  getFocusContaminants(): void {
    this.http.get< Array<Focus> >('http://192.168.10.12:63390/api/focus')
      .subscribe(data => {
        console.log(data);
        this.focuscontaminant = data;
        // Asignar valores directamente o iterar para verificar tipos, etc ¿?
        this.focuses = Object.assign({},data); // Copia por valor - test
        if (Array.isArray(this.focuses) && this.focuses.length) {
          // Esta referenciado (a la hora de modificar, se hace copia por valor)
          this.selectedFocus = this.focuses[0];
        }
        if (this.selectedFocus)     this.selectedAnalyzer = this.selectedFocus[0];
        if (this.selectedAnalyzer)  this.selectedSensor = this.selectedAnalyzer[0];

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
