import { Component, OnInit } from '@angular/core';
import { VariablesGlobalesInterfaz } from 'src/app/Core/Services/variables-globales-interfaz.service.ts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModoFormulario } from 'src/app/Interfaces/Clases/modoFormulario.model';
import { Escuela } from 'src/app/Interfaces/Modelos/escuela.model';

@Component({
  selector: 'app-crear-escuela',
  templateUrl: './crear-escuela.component.html',
  styleUrls: ['./crear-escuela.component.css']
})
export class CrearEscuelaComponent implements OnInit {

  public escuelaForm: FormGroup;
  public regiones: any[] = [];
  public procesando: boolean;
  public buscandoEscuela: boolean;
  public modoFormulario: ModoFormulario = new ModoFormulario();

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

    if(this.modoFormulario.crear)
    {
      this.asignarCodigo()
    }
    else if(this.modoFormulario.modificar){
      // Aqui pondre algun metodo que llegue de otro formulario
    }
    else{
    // Aqui pondre algun metodo que llegue de otro formulario
    }
  }


  public asignarCodigo(){
    let codigoAux = this.interfaz.generarCodigo();
    console.log(codigoAux);
    this.escuelaForm.get("codigoEscuela").setValue(codigoAux);
    // this.paisForm.get("codigo").setValue("miayu");
    //return codigoAux;
  }



  public validarEscuela(formEscuelaValue){
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

    public getEscuela(codigo: string ){
      if(codigo != null && codigo !=""){
        this.buscandoEscuela = true;
        let apiAdess: string = `api/escuela/${codigo}`;

      }        
      }
    //   private guardarEscuela(escuelaFormValue){
    //     let escuelaAGuardar: Escuela = this. 


    // }

    // public pasarFormularioAEntidad(escuelaForm){
    //   let escuelaADevolver: Escuela ={
    //     idescuela: this.escuelaForm.controls.codigo.value,
    //   }

    // }


}
