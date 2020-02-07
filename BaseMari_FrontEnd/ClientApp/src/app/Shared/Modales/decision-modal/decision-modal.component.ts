import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-decision-modal',
  templateUrl: './decision-modal.component.html',
  styleUrls: ['./decision-modal.component.css']
})
export class DecisionModalComponent implements OnInit {

  public decision: boolean = false;

  constructor(public dialogRef: MatDialogRef<DecisionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }
  public aceptar(): void{
    this.decision = true;
    this.dialogRef.close(this.decision);
  }
  public cancelar(): void{
    this.decision = false;
    this.dialogRef.close(this.decision);
  }

}
