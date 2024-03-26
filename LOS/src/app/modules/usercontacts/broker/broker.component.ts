import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.css']
})
export class BrokerComponent {
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('#example').DataTable();
    });
  }
}
