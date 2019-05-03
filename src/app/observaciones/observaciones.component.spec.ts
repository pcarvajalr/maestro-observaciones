import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservacionesComponent } from './observaciones.component';
import { By } from '@angular/platform-browser';
import { Macro } from '../macro';
import { MacroService } from '../macro.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MACROS } from '../mock-macros';
import { Observacion } from '../observacion';
import { FormAgregarComponent } from '../form-agregar/form-agregar.component';


describe('ObservacionesComponent', () => {
  let component: ObservacionesComponent;
  let fixture: ComponentFixture<ObservacionesComponent>;
  let macrosMock: Macro[];
  let macroServiceFake : MacroService;
  let observacionesMock : Observacion[];

  beforeEach(async(() => {
    observacionesMock = [
      {
        macro:'Rosales Torre 1',
        id:1,
        nombre: 'Observacion Rosales 1',
        orden: 100
      },
      {
          macro:'Rosales Torre 2',
          id:2,
          nombre: 'Observacion Rosales 2',
          orden:200
      }
    ];

    macrosMock = MACROS;
    macroServiceFake = jasmine.createSpyObj('MacroService', {
      obtenerMacros: of(macrosMock)
    });

    TestBed.configureTestingModule({
      declarations: [ ObservacionesComponent, FormAgregarComponent ],
      imports: [FormsModule],
      providers: [{provide: MacroService, useValue: macroServiceFake}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe existir un "div" de clase "container row"',()=>{
    const divRow = fixture.debugElement.query(By.css('div[class="container row"]'));
    expect(divRow).toBeTruthy();
  });

  it('deberia existir un "div" con la clase "offset-md-1"', ()=>{
    const divCol = fixture.debugElement.query(By.css('div[class="offset-md-1"]'));
    expect(divCol).toBeTruthy();
  });

  it('deberia existir un "select" con nombre "selMacro"',()=>{
    const selMacro = fixture.debugElement.query(By.css('select[name="selMacro"]'));
    expect(selMacro).toBeTruthy();
  });

  it('deberian existir tantos "option" como tantos elementos existan en el arreglo "MacroProyectos"', () => {
    const optionMacros = fixture.debugElement.queryAll(By.css('option[name="optionMacro"]'));
    expect(optionMacros.length).toBe(macrosMock.length);
  });

  it('deberia los "option" contener el valor de la propiedad "nombre" del arreglo "macros"', () => {
    const optionMacros = fixture.debugElement.queryAll(By.css('option[class="optionMacros"]'));
    optionMacros.forEach(function (macroAc, index: number) {
      const optionMacrosElement: HTMLOptionElement = macroAc.nativeElement;
      expect(optionMacrosElement.textContent).toContain(
        macrosMock[index].id.toString() && macrosMock[index].nombre
      );
    });
  });

  it('deberia existir una tabla que muestra la informacion de las observaciones',()=>{
    const tablaObservaciones = fixture.debugElement.query(By.css('table[name="tblObs"]'));
    expect(tablaObservaciones).toBeTruthy();
  });

  it('deberian existir tantos "tr[name="datosObs"]" como tantos elementos existan en el arreglo observaciones', () => {
    component.observaciones = observacionesMock;
    fixture.detectChanges();
    const trDatosObs = fixture.debugElement.queryAll(By.css('tr[name="datosObs"]'));
    expect(trDatosObs.length).toBe(component.observaciones.length);
  });

  
});
