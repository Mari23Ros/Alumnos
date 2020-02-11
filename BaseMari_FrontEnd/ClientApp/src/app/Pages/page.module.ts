import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalServerComponent } from './internal-server/internal-server.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginaAlumnoComponent } from './pagina-alumno/pagina-alumno.component';
import { PaginaEscuelaComponent } from './pagina-escuela/pagina-escuela.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { EscuelaModule } from '../Components/Escuela/escuela.module';
import { AlumnoModule } from '../Components/Alumno/alumno.module';
import { SharedModule } from '../Shared/shared.module';



@NgModule({
    declarations: [
        InternalServerComponent,
        NavbarComponent,
        NotFoundComponent,
        PaginaAlumnoComponent,
        PaginaEscuelaComponent,
        PaginaPrincipalComponent,

    ],
    imports: [
        CommonModule,
        EscuelaModule,
        AlumnoModule,
        SharedModule
    ],
    exports:[
        PaginaAlumnoComponent,
        PaginaEscuelaComponent,
        InternalServerComponent,
        NotFoundComponent,
        PaginaPrincipalComponent
    ],
    entryComponents: [
        // USAR PARA JALAR MODALES

    ],
})

export class PageModule { }