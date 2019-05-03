import { Component, OnInit } from '@angular/core';
import { Macro } from '../macro';
import { MACROS } from '../mock-macros';

@Component({
  selector: 'app-form-agregar',
  templateUrl: './form-agregar.component.html',
  styleUrls: ['./form-agregar.component.css']
})
export class FormAgregarComponent implements OnInit {

  ArrayMacros: Macro[] = MACROS;

  constructor() { }

  ngOnInit() {
  }

}
