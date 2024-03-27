import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatebackofficeComponent } from '../createbackoffice/createbackoffice.component';
declare var $: any; 
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent {
  constructor(public MatDialog:MatDialog){}
  opendialog():void{
    const dialogRef =this.MatDialog.open(CreatebackofficeComponent,
      ) };
      
  ngOnInit(): void {
    $(document).ready(function() {
      $('#example').DataTable();
    });
  }

}
