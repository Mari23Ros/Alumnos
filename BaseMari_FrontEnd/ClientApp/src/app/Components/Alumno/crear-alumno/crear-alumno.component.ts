import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Escuela } from 'src/app/Interfaces/Modelos/escuela.model';
import { RepositoryService } from 'src/app/Core/Services/repository.service';
import { Alumno } from 'src/app/Interfaces/Modelos/alumno.model';
import { ModoFormulario } from 'src/app/Interfaces/Clases/modoFormulario.model';
import { MatDialog } from '@angular/material';
import { MessageModalComponent } from 'src/app/Shared/Modales/message-modal/message-modal.component';
import { DecisionModalComponent } from 'src/app/Shared/Modales/decision-modal/decision-modal.component';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {
  public alumnoForm: FormGroup;
  public listaEscuelas: Escuela[];
  public procesando: boolean;
  public modoFormulario: ModoFormulario = new ModoFormulario();
  public buscandoAlumno: boolean = false;
  public alumno: Alumno;

  constructor( private repository: RepositoryService,
                private dialog: MatDialog) {
             this.getEscuelas() 
   }

  ngOnInit() {
    this.alumnoForm = new FormGroup({
        codigoAlumno: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.minLength(10)]),
        nombreAlumno: new FormControl('',[Validators.required, Validators.maxLength(50), Validators.minLength(4)]),
        edadAlumno: new FormControl('',[Validators.required, Validators.maxLength(3), Validators.minLength(1)]),
        direccionAlumno: new FormControl('',[Validators.maxLength(50), Validators.minLength(4)]),
        sexoAlumno: new FormControl('',[Validators.required]),
        codigoEscuelaAlumno: new FormControl('',[Validators.required]),
        nombreEscuela: new FormControl('',[]),
        numeroEscuela: new FormControl('',[]),
        regionEscuela: new FormControl('',[])
    })

  }

  public validarYGuardarAlumno(alumnoFormValue){
    // console.log(alumnoFormValue);
    this.alumnoForm.markAllAsTouched();
    this.procesando = true;
    this.modoFormulario.modoCrear();
    // console.log("entro a validaryguardar",alumnoFormValue);
    if(this.alumnoForm.valid){
      // console.log("es valido el alumnoFormValue");
      if(this.modoFormulario.crear){
        // console.log("esta en modo crear");
        this.crearAlumno(alumnoFormValue)

      }
      else if(this.modoFormulario.modificar){
        // Aca llamara una funcion si modifica
      }
    }
    // console.log("No es valido ");

  }

  public crearAlumno(alumnoFormValue){
    // console.log("Entro a crearAlumno",alumnoFormValue);
    let alumnoNuevo: Alumno = this.pasarFormularioAEntidad(alumnoFormValue);

      //  console.log( " Entra a crearEscuela ", this.pasarFormularioAEntidad(escuelaFormValue) );
      //  console.log('Aqui esta el formValue', escuelaFormValue);
    let url: string = 'api/alumno';
    this.repository.create(url, alumnoNuevo).subscribe(respuestaQueMeDevuelve =>{
      this.mostrarMessageModal('Se guardo con exito', true),
      this.limpiarFormularioAlumno(true)},
      error =>{
        this.mostrarMessageModal('No se pudo crear la escuela', false)
      }
      );
  }

  public limpiarFormularioAlumno(completo: boolean){
    if(completo){
      this.alumnoForm.get("codigoAlumno").setValue("");
    }
    this.alumnoForm.get("nombreAlumno").setValue("");
    this.alumnoForm.get("edadAlumno").setValue("");
    this.alumnoForm.get("direccionAlumno").setValue("");
    this.alumnoForm.get("sexoAlumno").setValue("");
    this.alumnoForm.get("codigoEscuelaAlumno").setValue("");
    this.alumnoForm.markAsUntouched();
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


  public pasarFormularioAEntidad(alumnoFormValue): Alumno{
    let alumnoADevolver: Alumno = {
      idalumno : alumnoFormValue.codigoAlumno,
      nombre : alumnoFormValue.nombreAlumno,
      edad : alumnoFormValue.edadAlumno,
      direccion : alumnoFormValue.direccionAlumno,
      sexo : alumnoFormValue.sexoAlumno,
      escuela: {
        idescuela: alumnoFormValue.codigoEscuelaAlumno,
        nombre: alumnoFormValue.nombreEscuela,
        numero: alumnoFormValue.numeroEscuela,
        region: alumnoFormValue.regionEscuela
      }
    }
    return alumnoADevolver;

  }


  public getEscuelas(){
    let url = "api/escuela";
    this.repository.getData(url)
          .subscribe((resultado: any) => {
            this.listaEscuelas = resultado.value as Escuela[];
            console.log("entra aqui",this.listaEscuelas);
          }, error => {  });

    // console.log("no hace nada-getEscuelas", this.listaEscuelas);
  }

  public validateControl(controlName: string){
    if(this.alumnoForm.controls[controlName].invalid && this.alumnoForm.controls[controlName].touched)
    {
      return true;
    }
    else{
      return false;
    }
  }

  public hasError(controlName: string, errorName: string)
  {
    if(this.alumnoForm.controls[controlName].hasError(errorName))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  public pasarTablaAformulario(alumnoAMostrar: Alumno){ // TODO : Cambiar nombre pasar entidad a formulario
    this.alumnoForm.get("codigoAlumno").setValue(alumnoAMostrar.idalumno);
    this.alumnoForm.get("nombreAlumno").setValue(alumnoAMostrar.nombre);
    this.alumnoForm.get("edadAlumno").setValue(alumnoAMostrar.edad);
    this.alumnoForm.get("direccionAlumno").setValue(alumnoAMostrar.direccion);
    this.alumnoForm.get("sexoAlumno").setValue(alumnoAMostrar.sexo);
    this.alumnoForm.get("codigoEscuelaAlumno").setValue(alumnoAMostrar.escuela.idescuela);
  }

  public getAlumno(codigo: string){
    if(codigo != null && codigo != "")
    {
      this.buscandoAlumno = true;
      let url: string = `api/alumno/${codigo}`;
      this.repository.getData(url)
          .subscribe((respuesta: any)=>{
            this.alumno = respuesta.value as Alumno;
            this.pasarTablaAformulario(this.alumno);
            this.buscandoAlumno = false;
          },
          (error)=>{
            this.limpiarFormularioAlumno(false);
            this.buscandoAlumno = false;
          });
    }
  }


}
