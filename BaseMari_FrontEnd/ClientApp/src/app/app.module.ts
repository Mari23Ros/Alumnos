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
import { SharedModule } from './Shared/shared.module';
import { PaginaPrincipalComponent } from './Pages/pagina-principal/pagina-principal.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { InternalServerComponent } from './Pages/internal-server/internal-server.component';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [

    AppComponent,
    CrearAlumnoComponent,
    ListarAlumnoComponent,
    PaginaAlumnoComponent,
    CrearEscuelaComponent,
    ListarEscuelaComponent,
    PaginaPrincipalComponent,
    NotFoundComponent,
    InternalServerComponent,
  ],
  imports: [
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
