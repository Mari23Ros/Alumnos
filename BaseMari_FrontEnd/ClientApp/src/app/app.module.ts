import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrearAlumnoComponent } from './Components/crear-alumno/crear-alumno.component';
import { ListarAlumnoComponent } from './Components/listar-alumno/listar-alumno.component';
import { PaginaAlumnoComponent } from './Pages/pagina-alumno/pagina-alumno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearEscuelaComponent } from './Components/crear-escuela/crear-escuela.component';
import { ListarEscuelaComponent } from './Components/listar-escuela/listar-escuela.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearAlumnoComponent,
    ListarAlumnoComponent,
    PaginaAlumnoComponent,
    CrearEscuelaComponent,
    ListarEscuelaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
