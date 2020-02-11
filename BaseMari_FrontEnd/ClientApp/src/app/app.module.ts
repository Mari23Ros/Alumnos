import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginaAlumnoComponent } from './Pages/pagina-alumno/pagina-alumno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './Shared/shared.module';
import { PaginaPrincipalComponent } from './Pages/pagina-principal/pagina-principal.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { InternalServerComponent } from './Pages/internal-server/internal-server.component';
import { APP_ROUTING } from './app.routes';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { PaginaEscuelaComponent } from './Pages/pagina-escuela/pagina-escuela.component';
import { AlumnoModule } from './Components/Alumno/alumno.module';
import { EscuelaModule } from './Components/Escuela/escuela.module';
import { PageModule } from './Pages/page.module';

@NgModule({
  declarations: [

    AppComponent,
    PaginaAlumnoComponent,
    PaginaPrincipalComponent,
    NotFoundComponent,
    InternalServerComponent,
    NavbarComponent,
    PaginaEscuelaComponent,
  ],
  imports: [
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    PageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
