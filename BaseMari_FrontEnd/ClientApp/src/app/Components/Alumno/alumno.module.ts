import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { ListarAlumnoComponent } from './listar-alumno/listar-alumno.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RepositoryService } from 'src/app/Core/Services/repository.service';

@NgModule({
    declarations: [
        CrearAlumnoComponent,
        ListarAlumnoComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports:[
        CrearAlumnoComponent,
        ListarAlumnoComponent,
    ],
    entryComponents: [
    ],
    providers: [
        RepositoryService,
    ]
})

export class AlumnoModule { }