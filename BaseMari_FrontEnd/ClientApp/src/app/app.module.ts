import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrearAlumnoComponent } from './Components/crear-alumno/crear-alumno.component';
import { ListarAlumnoComponent } from './Components/listar-alumno/listar-alumno.component';
import { PaginaAlumnoComponent } from './Pages/pagina-alumno/pagina-alumno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearEscuelaComponent } from './Components/crear-escuela/crear-escuela.component';
import { ListarEscuelaComponent } from './Components/listar-escuela/listar-escuela.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterfazComponent } from './Shared/interfaz/interfaz.component';
import { AlertaComponent } from './Shared/Interfaz/alerta/alerta.component';
import { CargandoComponent } from './Shared/Interfaz/cargando/cargando.component';

@NgModule({
  declarations: [

    AppComponent,
    CrearAlumnoComponent,
    ListarAlumnoComponent,
    PaginaAlumnoComponent,
    CrearEscuelaComponent,
    ListarEscuelaComponent,
    InterfazComponent,
    AlertaComponent,
    CargandoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
