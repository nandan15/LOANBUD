import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UsercontactsComponent } from "./usercontacts/usercontacts.component";
import { BackOfficeComponent } from "./back-office/back-office.component";
import { BorrowersComponent } from "./borrowers/borrowers.component";
import { BranchComponent } from "./branch/branch.component";
import { BrokerComponent } from "./broker/broker.component";
import { LoanOfficerComponent } from "./loan-officer/loan-officer.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { CreateBackofficeUserComponent } from "./create-backoffice-user/create-backoffice-user.component";
import { CreatebackofficeComponent } from "./createbackoffice/createbackoffice.component";



const usercontactsRoutes:Routes=[
    {path:'',component:UsercontactsComponent,children:[
        {path:'back-office',component:BackOfficeComponent},
        {path:'createbackofficeuser',component:CreateBackofficeUserComponent},
        {path:'branch',component:BranchComponent},
        {path:'broker',component:BrokerComponent},
        {path:'loanofficer',component:LoanOfficerComponent},
        {path:'contacts',component:ContactsComponent},
        {path:'borrowers',component:BorrowersComponent},
        {path:'createbackoffice',component:CreatebackofficeComponent},
        
        
    ]}
];

@NgModule({
    imports:[RouterModule.forChild(usercontactsRoutes)],
    exports:[RouterModule]
})
export class usercontactsrouter{}