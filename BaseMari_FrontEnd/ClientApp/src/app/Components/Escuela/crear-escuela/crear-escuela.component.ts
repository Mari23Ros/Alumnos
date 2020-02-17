import { Component, OnInit, Inject, Input } from '@angular/core';
import { VariablesGlobalesInterfaz } from 'src/app/Core/Services/variables-globales-interfaz.service.ts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModoFormulario } from 'src/app/Interfaces/Clases/modoFormulario.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MessageModalComponent } from 'src/app/Shared/Modales/message-modal/message-modal.component';
import { DecisionModalComponent } from 'src/app/Shared/Modales/decision-modal/decision-modal.component';
import { Escuela } from 'src/app/Interfaces/Modelos/escuela.model';
import { RepositoryService } from 'src/app/Core/Services/repository.service';

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
  public buscandoEscuela: boolean = false;
  public escuela: Escuela;


  constructor(private interfaz: VariablesGlobalesInterfaz,
              private dialog: MatDialog,
              private repositorio: RepositoryService) {
              this.pasarArrayDeRegionesASelect();
   }

  ngOnInit() {
    this.escuelaForm = new FormGroup( {
      codigoEscuela : new FormControl('',[Validators.required]),
      numeroEscuela : new FormControl('',[Validators.required, Validators.maxLength(25), Validators.minLength(5)]),
      nombreEscuela : new FormControl('',[Validators.required, Validators.maxLength(60), Validators.minLength(4)]),
      regionEscuela : new FormControl('',[]),
    });

    // console.log(this.escuelaForm);

    // Condicional para poder asignar el codigo de escuela; si es nuevo debe asignar si no lo es no debe asignar modificar
    if (this.codigo == 'nuevo') {
      // console.log("Llego a nuevo");
      this.modoFormulario.modoCrear();
      this.asignarCodigo()

    }
    else{
      this.modoFormulario.modoEditar();
      // console.log("Llefo a modificar");
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
    // console.log(codigoAux);
    this.escuelaForm.get("codigoEscuela").setValue(codigoAux);
    // this.paisForm.get("codigo").setValue("miayu");
    //return codigoAux;
  }



  public validatYGuardarEscuela(formEscuelaValue){
    this.escuelaForm.markAllAsTouched();
    this.procesando = true;

    if(this.escuelaForm.valid){
      if(this.modoFormulario.crear){
        this.crearEscuela(formEscuelaValue)

      }
      else if(this.modoFormulario.modificar){
        // Aca llamara una funcion si modifica
      }
    }
    else{
      this.mostrarMessageModal( 'Campos no válidos, revise que no haya campos vacíos y que cumplan con los formatos establecidos', false )

    }

    // console.log(this.escuelaForm);
  }

  private crearEscuela(escuelaFormValue){

   let escuelaNueva = this.pasarFormularioAEntidad(escuelaFormValue);

      //  console.log( " Entra a crearEscuela ", this.pasarFormularioAEntidad(escuelaFormValue) );
      //  console.log('Aqui esta el formValue', escuelaFormValue);
    let url: string = "Api/escuela"
    this.repositorio.create(url, escuelaNueva).subscribe(respuestaQueMeDevuelve =>{
      this.mostrarMessageModal('Se guardo con exito', true),
      this.limpiarFormularioEscuela(true)},
      error =>{
        this.mostrarMessageModal('No se pudo crear la escuela', false)
      }
      );
  }



  public limpiarFormularioEscuela( completo: boolean){
    if(completo){
      this.escuelaForm.get("codigoEscuela").setValue(this.interfaz.generarCodigo());
    }
      this.escuelaForm.get("numeroEscuela").setValue("");
      this.escuelaForm.get("nombreEscuela").setValue("");
      this.escuelaForm.get("regionEscuela").setValue("");
      this.escuelaForm.markAsUntouched();
  }

  private pasarFormularioAEntidad(escuelaFormValue): Escuela {
    let escuelaADevolver: Escuela = {
      idescuela: escuelaFormValue.codigoEscuela,
      numero: escuelaFormValue.numeroEscuela,
      nombre: escuelaFormValue.nombreEscuela,
      region: escuelaFormValue.regionEscuela
    }
    return escuelaADevolver;
  }

  public pasarArrayDeRegionesASelect(){
    this.regiones = this.interfaz.regiones;
  }

  //#region de metodos modales

  public mostrarMessageModal(mensajeAMostrar: string, operacionExitosa: boolean){
    const dialogRef = this.dialog.open(MessageModalComponent, {
      disableClose: true,
      panelClass: 'myapp-no-padding-dialog',
      data: {
        mensaje: mensajeAMostrar,
        estado: operacionExitosa 
      }
    });

    dialogRef.afterClosed().subscribe(result => { 
        this.procesando = false;
     });
  }


  public mostrarDecisioneModal(codigoRecepcionado:string, mensajeAMostrar: string){
    const dialogRef = this.dialog.open(DecisionModalComponent, {
      disableClose: true,
      panelClass: 'myapp-no-padding-dialog',
      data: {
        mensaje: mensajeAMostrar
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        // this.ejecutarBorrarUsuario(codigoRecepcionado);
      }
      else {
          // console.log("NO HARA NADA");
      }
    });
  }

  //#endregion

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

    public pasarTablaAformulario( escuelaAMostrar: Escuela){
      this.escuelaForm.get("codigoEscuela").setValue(escuelaAMostrar.idescuela);
      this.escuelaForm.get("numeroEscuela").setValue(escuelaAMostrar.numero);
      this.escuelaForm.get("nombreEscuela").setValue(escuelaAMostrar.nombre);
      this.escuelaForm.get("regionEscuela").setValue(escuelaAMostrar.region);
    }

    public getEscuela(codigo: string){
      if(codigo != null && codigo !=""){
        this.buscandoEscuela = true;
        let url: string = `api/escuela/${codigo}`;
        this.repositorio.getData(url)
          .subscribe((respuesta: any)=> {
            this.escuela = respuesta.value as Escuela;
            this.pasarTablaAformulario(this.escuela);
            this.buscandoEscuela = false;
          },
          (error) =>{
            this.limpiarFormularioEscuela(false);
            this.buscandoEscuela = false;
          });
      }

    }



}
