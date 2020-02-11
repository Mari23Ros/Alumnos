import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearEscuelaComponent } from './crear-escuela/crear-escuela.component';
import { ListarEscuelaComponent } from './listar-escuela/listar-escuela.component';
import { CargandoComponent } from 'src/app/Shared/Interfaz/cargando/cargando.component';
import { AlertaComponent } from 'src/app/Shared/Interfaz/alerta/alerta.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CrearEscuelaComponent,
        ListarEscuelaComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
 
    ],
    exports:[
        CrearEscuelaComponent,
        ListarEscuelaComponent,
    ],
    
    entryComponents: [

    ],
})

export class EscuelaModule { }