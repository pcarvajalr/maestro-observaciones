import { Injectable } from '@angular/core';
import { Observacion } from './observacion';
import { OBSERVACIONES } from './mock-observaciones';


@Injectable({
  providedIn: 'root'
})
export class ObservacionService {  
  

  observacionesData: any;
  agregar: any;

  constructor(private observaciones: Observacion[] = OBSERVACIONES) { }


  // obtenerObservacionesFiltro(filtro: string){
  //   this.observacionesData = this.observaciones,{
  //     query: {
  //       orderByChild: 'nombre',
  //       equalTo: filtro
  //     }
  //   } as any;
  //   return this.observaciones;
  // }
}