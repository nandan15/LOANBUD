import { Component } from '@angular/core';
import { ContactsPopupComponent } from '../contacts-popup/contacts-popup.component';
import { MatDialog } from '@angular/material/dialog';
declare var $: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent {

  constructor(public dialog:MatDialog)
  {

  }

 
opendialog():void{
const dialogRef=this.dialog.open(ContactsPopupComponent,{

});
dialogRef.afterClosed().subscribe(result=>{
  console.group("The dilog is closed")
});
}

ngOnInit(): void {
  $(document).ready(function() {
    $('#example').DataTable();
  });
}


}
