import { Component, OnInit, Inject, Input } from '@angular/core';
import { VariablesGlobalesInterfaz } from 'src/app/Core/Services/variables-globales-interfaz.service.ts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModoFormulario } from 'src/app/Interfaces/Clases/modoFormulario.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-crear-escuela',
  templateUrl: './crear-escuela.component.html',
  styleUrls: ['./crear-escuela.component.css']
})
export class CrearEscuelaComponent implements OnInit {

  @Input() codigo: string = 'nuevo';
  public escuelaForm: FormGroup;
  public regiones: any[] = [];
  public procesando: boolean;
  public modoFormulario: ModoFormulario = new ModoFormulario();
  public btnAceptar: boolean = false;


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
    
    console.log(this.escuelaForm);

    // Condicional para poder asignar el codigo de escuela; si es nuevo debe asignar si no lo es no debe asignar modificar
    if (this.codigo == 'nuevo') {
      console.log("Llego a nuevo");
      this.modoFormulario.modoCrear();
      this.asignarCodigo()

    }
    else{
      this.modoFormulario.modoEditar();
      console.log("Llefo a modificar");
    }

    
    // if(this.modoFormulario.crear)
    // {
    //   this.asignarCodigo()
    // }
    // else if(this.modoFormulario.modificar){
    //   // Aqui pondre algun metodo que llegue de otro formulario
    // }
    // else{
    // // Aqui pondre algun metodo que llegue de otro formulario
    // }

  }


  public asignarCodigo(){
    let codigoAux = this.interfaz.generarCodigo();
    console.log(codigoAux);
    this.escuelaForm.get("codigoEscuela").setValue(codigoAux);
    // this.paisForm.get("codigo").setValue("miayu");
    //return codigoAux;
  }



  public guardarEscuela(formEscuelaValue){
    this.escuelaForm.markAllAsTouched();
    this.procesando = true;

    if(this.escuelaForm.valid){
      if(this.modoFormulario.crear){
        

      }

    }

    console.log(this.escuelaForm);
  }
  public pasarArrayDeRegionesASelect(){
    this.regiones = this.interfaz.regiones;
  }

    //#region Validacion de controles
    public validateControl(controlName: string){
      if (this.escuelaForm.controls[controlName].invalid && this.escuelaForm.controls[controlName].touched)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
  
    public hasError(controlName: string, errorName: string) {
      if (this.escuelaForm.controls[controlName].hasError(errorName))
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    //#endregion
    //   private guardarEscuela(escuelaFormValue){
    //     let escuelaAGuardar: Escuela = this. 


    // }

    // public pasarFormularioAEntidad(escuelaForm){
    //   let escuelaADevolver: Escuela ={
    //     idescuela: this.escuelaForm.controls.codigo.value,
    //   }

    // }



}
