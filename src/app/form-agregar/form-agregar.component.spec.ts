import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAgregarComponent } from './form-agregar.component';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FormAgregarComponent', () => {
  let component: FormAgregarComponent;
  let fixture: ComponentFixture<FormAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAgregarComponent ],
      imports: [ReactiveFormsModule,FormsModule],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('debería existir un formulario "form[name="formAgregar"] para agregar una observacion con', ()=>{
    const formAgregar = fixture.debugElement.query(By.css('form[name="formAgregar"]'));
    expect(formAgregar).toBeTruthy();
  })
});
