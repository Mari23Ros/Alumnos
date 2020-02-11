import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/Core/Services/repository.service';
import { MatDialog } from '@angular/material';
import { PaginaEscuelaComponent } from '../pagina-escuela/pagina-escuela.component';
import { CrearEscuelaComponent } from 'src/app/Components/Escuela/crear-escuela/crear-escuela.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  minimizado: boolean = false;

  constructor(/*private repository: RepositoryService, private dialog: MatDialog*/) { }

  ngOnInit() {
  }

  // INICIO para el modal
  // public mostrarEscuelaModal(){
  //   const dialogRef = this.dialog.open(CrearEscuelaComponent);
  //   const dialogRef = this.dialog.open(CrearEscuelaComponent, {
  //     disableClose: false,
  //     data: {
  //       modo: 'simple'
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     // en este caso no me interesa el resultado que pueda devolver ya que lo abre desde la raiz
  //     // console.log(result);
  //   });
  // }

  // FIN para el modal
}
