import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrearAlumnoComponent } from './Components/crear-alumno/crear-alumno.component';
import { ListarAlumnoComponent } from './Components/listar-alumno/listar-alumno.component';
import { PaginaAlumnoComponent } from './Pages/pagina-alumno/pagina-alumno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CrearAlumnoComponent,
    ListarAlumnoComponent,
    PaginaAlumnoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
