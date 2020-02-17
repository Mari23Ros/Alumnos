import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

import { CargandoComponent } from './Interfaz/cargando/cargando.component';
import { AlertaComponent } from './Interfaz/alerta/alerta.component';
import { MessageModalComponent } from './Modales/message-modal/message-modal.component';
import { DecisionModalComponent } from './Modales/decision-modal/decision-modal.component';

const componentesShare = [
  CargandoComponent,
  AlertaComponent,
  MessageModalComponent,
  DecisionModalComponent,
]

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    componentesShare
  ],

  exports: [

    // FORMA CORTA DE EXPORTAR, HACIENDO USO DE UNA VARIABLE

    componentesShare
    // FORMA LARGA DE EXPORTAR

    // CargandoComponent,
    // AlertaComponent,
    // MessageModalComponent,
    // DecisionModalComponent
  ],

  entryComponents: [

  ]

})
export class SharedModule { }
