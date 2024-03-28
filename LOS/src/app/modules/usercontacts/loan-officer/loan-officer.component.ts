import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
declare var $: any;
@Component({
  selector: 'app-loan-officer',
  templateUrl: './loan-officer.component.html',
  styleUrls: ['./loan-officer.component.css']
})
export class LoanOfficerComponent {
  constructor(public MatDialog:MatDialog) { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('#example').DataTable();
    });
  }
}
