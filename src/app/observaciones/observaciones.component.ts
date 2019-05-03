import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Macro } from '../macro';
import { MACROS } from '../mock-macros';
import { Observacion } from '../observacion';
import { OBSERVACIONES } from '../mock-observaciones';


@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.css']
  
})

export class ObservacionesComponent implements OnInit {

  macros$: Observable<Macro[]>;

  ArrayMacros: Macro[] = MACROS;

  observaciones: Observacion[] = OBSERVACIONES;

  filtro = '-1';

  constructor() { }

  ngOnInit() {
  }

  filtrar(){
    let valor = this.filtro;
    this.observaciones = OBSERVACIONES;
    if(valor != '-1')
    {
      let observacionesFiltradas: Observacion[] = [];
      this.observaciones.forEach(function(observacion){
        if(valor == observacion.macro){
          observacionesFiltradas.push(observacion);
        }
      });
      this.observaciones = observacionesFiltradas;
    }
  }

}
