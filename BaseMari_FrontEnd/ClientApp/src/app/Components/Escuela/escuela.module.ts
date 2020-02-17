import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearEscuelaComponent } from './crear-escuela/crear-escuela.component';
import { ListarEscuelaComponent } from './listar-escuela/listar-escuela.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/Core/Modules/angular-material.module';
import { DecisionModalComponent } from 'src/app/Shared/Modales/decision-modal/decision-modal.component';
import { MessageModalComponent } from 'src/app/Shared/Modales/message-modal/message-modal.component';
import { RepositoryService } from 'src/app/Core/Services/repository.service';

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
        AngularMaterialModule
 
    ],
    exports:[
        CrearEscuelaComponent,
        ListarEscuelaComponent,
    ],
    
    entryComponents: [
        DecisionModalComponent,
        MessageModalComponent,

    ],
    providers:[
        RepositoryService,
    ]
})

export class EscuelaModule { }