import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

import { CargandoComponent } from './Interfaz/cargando/cargando.component';
import { AlertaComponent } from './Interfaz/alerta/alerta.component';
import { MessageModalComponent } from './Modales/message-modal/message-modal.component';
import { DecisionModalComponent } from './Modales/decision-modal/decision-modal.component';


@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild([
    //   // { path: 'pais', component: PaisComponent }
    // ])

  ],
  declarations: [
    CargandoComponent,
    AlertaComponent,
    MessageModalComponent,
    DecisionModalComponent,
  ],

  exports: [
    CargandoComponent,
    AlertaComponent
  ],

  entryComponents: [

  ]

})
export class SharedModule { }
