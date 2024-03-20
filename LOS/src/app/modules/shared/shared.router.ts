import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SharedComponent } from "./shared/shared.component";
const SharedRoutes:Routes=[
    {path:'',component:SharedComponent,children:[
        {path:'sidebar',component:SidebarComponent},
        {path:'header',component:HeaderComponent},
    ]}
];
@NgModule({
    imports:[RouterModule.forChild(SharedRoutes)],
    exports:[RouterModule]
})
export class sharedrouter{}