import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-create-loan-officer',
  templateUrl: './create-loan-officer.component.html',
  styleUrls: ['./create-loan-officer.component.css']
})
export class CreateLoanOfficerComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  myButton() {
    console.log("my button was clicked!");
  }
}
