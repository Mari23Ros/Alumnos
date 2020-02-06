import { Component, OnInit } from '@angular/core';
import { VariablesGlobalesInterfaz } from 'src/app/Core/Services/variables-globales-interfaz.service.ts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-escuela',
  templateUrl: './crear-escuela.component.html',
  styleUrls: ['./crear-escuela.component.css']
})
export class CrearEscuelaComponent implements OnInit {

  public escuelaForm: FormGroup;
  public regiones: Object[] = [];

  constructor(private interfaz: VariablesGlobalesInterfaz) {
    this.pasarArrayDeRegionesASelect();
   }

  ngOnInit() {
    this.escuelaForm = new FormGroup( {
      codigoEscuela : new FormControl('',[Validators.required]),
      numeroEscuela : new FormControl('',[Validators.required, Validators.maxLength(25), Validators.minLength(5)]),
      nombreEscuela : new FormControl('',[Validators.required, Validators.maxLength(60), Validators.minLength(4)]),
      regionEscuela : new FormControl('',[]),
    });
  }

  public asignarCodigo(){
    let codigoAux = this.interfaz.generarCodigo();
    this.escuelaForm.get("codigo").setValue(codigoAux);
    // this.paisForm.get("codigo").setValue("miayu");
  }
  public pasarArrayDeRegionesASelect(){
    this.regiones = this.interfaz.regiones;
  }

}
