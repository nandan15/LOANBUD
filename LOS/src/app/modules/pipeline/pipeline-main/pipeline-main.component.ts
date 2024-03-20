import { Component, OnInit } from '@angular/core';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-pipeline-main',
  templateUrl: './pipeline-main.component.html',
  styleUrls: ['./pipeline-main.component.css']
})
export class PipelineMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('#example').DataTable();
    });
  }

}
