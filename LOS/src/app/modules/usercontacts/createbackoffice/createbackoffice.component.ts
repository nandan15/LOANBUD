import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';


@Component({
  selector: 'app-createbackoffice',
  templateUrl: './createbackoffice.component.html',
  styleUrls: ['./createbackoffice.component.css']
})
export class CreatebackofficeComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  myButton() {
    console.log("my button was clicked!");
  }
}
