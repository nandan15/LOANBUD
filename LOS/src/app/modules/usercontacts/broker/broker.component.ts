import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BrokerPopupComponent } from '../broker-popup/broker-popup.component';
declare var $: any;

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.css']
})
export class BrokerComponent {
  constructor(public dialog:MatDialog) { }

opendialog():void{
  const dialogRef=this.dialog.open(BrokerPopupComponent,{ 
  });
  dialogRef.afterClosed().subscribe(result=>{
    console.group("The dialog is closed")
  });
}

ngOnInit(): void {
  $(document).ready(function() {
    $('#example').DataTable();
  });
}
  
}
