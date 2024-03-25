import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UsercontactsComponent } from "./usercontacts/usercontacts.component";
import { BackOfficeComponent } from "./back-office/back-office.component";
import { BorrowersComponent } from "./borrowers/borrowers.component";
import { BranchComponent } from "./branch/branch.component";
import { BrokerComponent } from "./broker/broker.component";
import { LoanOfficerComponent } from "./loan-officer/loan-officer.component";
import { ContactsComponent } from "./contacts/contacts.component";


const usercontactsRoutes:Routes=[
    {path:'',component:UsercontactsComponent,children:[
        {path:'back-office',component:BackOfficeComponent},
        {path:'branch',component:BranchComponent},
        {path:'broker',component:BrokerComponent},
        {path:'loan-officer',component:LoanOfficerComponent},
        {path:'contacts',component:ContactsComponent},
        {path:'borrowers',component:BorrowersComponent},
        
    ]}
];

@NgModule({
    imports:[RouterModule.forChild(usercontactsRoutes)],
    exports:[RouterModule]
})
export class usercontactsrouter{}