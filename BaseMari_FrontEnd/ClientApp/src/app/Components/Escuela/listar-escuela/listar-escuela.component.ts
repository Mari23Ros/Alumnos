import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Escuela } from 'src/app/Interfaces/Modelos/escuela.model';
import { RepositoryService } from 'src/app/Core/Services/repository.service';
import { MatDialog } from '@angular/material';
import { MessageModalComponent } from 'src/app/Shared/Modales/message-modal/message-modal.component';
import { DecisionModalComponent } from 'src/app/Shared/Modales/decision-modal/decision-modal.component';

@Component({
  selector: 'app-listar-escuela',
  templateUrl: './listar-escuela.component.html',
  styleUrls: ['./listar-escuela.component.css']
})
export class ListarEscuelaComponent implements OnInit {

  public listaEscuelas: Escuela[] = [];
  @Output() escuelaParaFormulario = new EventEmitter<Escuela>();

  constructor(private repository: RepositoryService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.cargarEscuelas();
  }

  public cargarEscuelas(){
    let url = "api/escuela";
    this.repository.getData(url)
    .subscribe( (respuesta: any) => {
      console.log(respuesta);
      this.listaEscuelas = respuesta.value as Escuela[] ;

    },
    (error)=>{
      this.mostrarMessageModal('No se pudo mostrar la lista correctamente, intente recargar la pagina', false);
    })

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

        this.borrarEscuela(codigoRecepcionado);

          // if(accion=="delete"){
          //   this.borrarEscuela(codigoRecepcionado);
          // }
          // else if(accion=="reset"){
          //   console.log("Aqui llamare al metodo de reseteo");
          // }
          // else{ }
      }
      else {
          // console.log("NO HARA NADA");
      }
    });
  }

  public obtenerIndiceABorrar(escuelas: any[], codigo: string){
    if(escuelas.length > 0 ){
      for( let index = 0; index < escuelas.length; index++){
        if(codigo == escuelas[index].idEscuela){
          return index;
        }
      }
    }
  }


  public decisionBorrarEscuela(idEscuela: string){
    // console.log( "Esto es el metodo para borrar la escuela ", idEscuela );
    this.mostrarDecisioneModal(idEscuela, "Seguro que desea eliminar esta escuela");
  }

  public borrarEscuela(idEscuela: string){
    let urlDelete = `api/escuela/${idEscuela}`;
    this.repository.delete(urlDelete)
      .subscribe(respuesta => {
        let indiceABorrar = this.obtenerIndiceABorrar(this.listaEscuelas, idEscuela);
        this.cargarEscuelas();
        this.mostrarMessageModal("Registro borrado con éxito", true);
      },
      (error) =>{
        this.mostrarMessageModal("Ocurrio un problema, revise su conexion", false);
      });
  }


// Output
  public pasarModeloEscuela( escuela: Escuela){
    // this.escuelaForm.patchValue(escuela);
    this.escuelaParaFormulario.emit(escuela);


  }

}
