import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ViewComponent } from "./view/view.component";
const DashboardRoutes:Routes=[
    {path:'',component:DashboardComponent,children:[
        {path:'view',component:ViewComponent}
    ]}
];
@NgModule({
    imports:[RouterModule.forChild(DashboardRoutes)],
    exports:[RouterModule]
})
export class dashboardrouter{}
