import { Component } from '@angular/core';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-borrowers',
  templateUrl: './borrowers.component.html',
  styleUrls: ['./borrowers.component.css']
})
export class BorrowersComponent {


  ngOnInit(): void {
    $(document).ready(function() {
      $('#example').DataTable();
    });
  }
}
