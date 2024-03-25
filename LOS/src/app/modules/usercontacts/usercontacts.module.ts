import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeComponent } from './back-office/back-office.component';
import { BranchComponent } from './branch/branch.component';
import { BrokerComponent } from './broker/broker.component';
import { LoanOfficerComponent } from './loan-officer/loan-officer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BorrowersComponent } from './borrowers/borrowers.component';

@NgModule({
  declarations: [
    BackOfficeComponent,
    BranchComponent,
    BrokerComponent,
    LoanOfficerComponent,
    ContactsComponent,
    BorrowersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsercontactsModule { }
