import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MessageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      // Otra forma de desabilitar el cerrado cuando se de click fuera del componente
      // dialogRef.disableClose = true;
     }

  ngOnInit() {
    // this.estadoComponente = this.data.estado;
    // console.log(this.estadoComponente);
  }

  public aceptar(): void{
    this.dialogRef.close();
  }
}
