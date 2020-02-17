import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/Interfaces/Modelos/alumno.model';
import { RepositoryService } from 'src/app/Core/Services/repository.service';
import { MatDialog } from '@angular/material';
import { MessageModalComponent } from 'src/app/Shared/Modales/message-modal/message-modal.component';
import { Escuela } from 'src/app/Interfaces/Modelos/escuela.model';
import { DecisionModalComponent } from 'src/app/Shared/Modales/decision-modal/decision-modal.component';
import { Vw_Alumno } from 'src/app/Interfaces/Modelos/Vw_Alumno.model';

@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.css']
})
export class ListarAlumnoComponent implements OnInit {

  public listaAlumnos: Vw_Alumno[];
  @Output() alumnoParaFormulario = new EventEmitter<Alumno>();

  constructor( private repository: RepositoryService,
                private dialog: MatDialog ) { }

  ngOnInit() {
    this.cargarAlumnos();
  }

  public mostrarMessageModal(mensajeAMostrar: string, operacionExitosa: boolean){
    const dialogRef = this.dialog.open(MessageModalComponent, {
      disableClose: true,
      panelClass: 'myapp-no-padding-dialog',
      data: {
        mensaje: mensajeAMostrar,
        estado: operacionExitosa 
      }
    });

    dialogRef.afterClosed().subscribe(result => {  });
  }

  public mostrarDecisioneModal(codigoRecepcionado:string, mensajeAMostrar: string, accion?: string){
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

        this.borrarAlumno(codigoRecepcionado);

      }
      else {
          // console.log("NO HARA NADA");
      }
    });
  }


  public cargarAlumnos(){
    let url = "api/alumno";
    this.repository.getData(url)
    .subscribe( (respuesta: any) => {
      console.log(respuesta);
      this.listaAlumnos = respuesta.value as Vw_Alumno[] ;
    },
    (error)=>{
      this.mostrarMessageModal('No se pudo mostrar la lista correctamente, intente recargar la pagina', false);
    })
  }

  public decisionBorrarAlumno(codigoAborrar: string){
    // Aun no retorna nada, aqui ira el la decision de borrar o no
    this.mostrarDecisioneModal(codigoAborrar, "Seguro que desea eliminar este alumno?");
  }
  public obtenerIndiceABorrar(alumno: Vw_Alumno[], codigo: string)
  {
    if(alumno.length > 0){
      for(let index = 0; alumno.length > index; index++){
        if(codigo == alumno[index].codigoAlumno){
          return index;
        }
      }
      
    }

  }

  public borrarAlumno(codigo: string){
    let urlDelete = `api/alumno/${codigo}`;
    this.repository.delete(urlDelete)
      .subscribe(respuesta =>{
        let indiceABorrar = this.obtenerIndiceABorrar(this.listaAlumnos, codigo);
        this.cargarAlumnos();
        this.mostrarMessageModal("Registro eliminado con exito",true);
      },
      (error)=>{
        this.mostrarMessageModal("No se pudo eliminar el registro, revise su conexion a Internet",false);
      });

  }

  public cargarAFormulario(vw_alumno: Vw_Alumno){
    let alumnoAux = this.convertirAAlumno(vw_alumno);
    this.pasarModeloEntidad(alumnoAux);
  }

  public convertirAAlumno(vw_alumno: Vw_Alumno){
    let alumnoAux: Alumno = {
      idalumno: vw_alumno.codigoAlumno,
      nombre: vw_alumno.nombreAlumno,
      edad: vw_alumno.edadAlumno,
      direccion: vw_alumno.direccionAlumno,
      sexo: vw_alumno.sexoAlumno,
      escuela:{
        idescuela: vw_alumno.codigoEscuelaAlumno,
        nombre: vw_alumno.nombreEscuela,
        numero: vw_alumno.regionEscuela,
        region: vw_alumno.regionEscuela
      }
    }
    return alumnoAux;

  }

  public pasarModeloEntidad(alumnoAux: Alumno){
    this.alumnoParaFormulario.emit(alumnoAux);
  }

}
