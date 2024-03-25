import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";


const usercontactsRoutes:Routes=[];

@NgModule({
    imports:[RouterModule.forChild(usercontactsRoutes)],
    exports:[RouterModule]
})
export class usercontactsrouter{}