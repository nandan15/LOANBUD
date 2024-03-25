import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-create-backoffice-user',
  templateUrl: './create-backoffice-user.component.html',
  styleUrls: ['./create-backoffice-user.component.css']
})
export class CreateBackofficeUserComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  myButton() {
    console.log("my button was clicked!");
  }
}
