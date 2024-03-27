import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatebackofficeComponent } from '../createbackoffice/createbackoffice.component';

declare var $: any; // Declare jQuery
@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent {
  constructor(public MatDialog:MatDialog) { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('#example').DataTable();
    });
  }

}
