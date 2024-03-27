import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeComponent } from './back-office/back-office.component';
import { BranchComponent } from './branch/branch.component';
import { BrokerComponent } from './broker/broker.component';
import { LoanOfficerComponent } from './loan-officer/loan-officer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BorrowersComponent } from './borrowers/borrowers.component';
import { usercontactsrouter } from './usercontacts.router';
import { CreateBackofficeUserComponent } from './create-backoffice-user/create-backoffice-user.component';
import { UsercontactsComponent } from './usercontacts/usercontacts.component';
import {MatButtonModule} from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ContactsPopupComponent } from './contacts-popup/contacts-popup.component';
import { BrokerPopupComponent } from './broker-popup/broker-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
   BackOfficeComponent,
   BranchComponent,
   BrokerComponent,
   LoanOfficerComponent,
   ContactsComponent,
   BorrowersComponent,
   CreateBackofficeUserComponent,
   UsercontactsComponent,
   ContactsPopupComponent,
   BrokerPopupComponent
  ],
  imports: [
    CommonModule,
    usercontactsrouter,
    MatButtonModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class UsercontactsModule { }
