import {  RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PipelineMainComponent } from "./pipeline-main/pipeline-main.component";
import { PipelineComponent } from "./pipeline/pipeline.component";
const PipelineRoutes:Routes=[
{path:'',component:PipelineComponent,children:[
    {path:'pipelinemain',component:PipelineMainComponent},
]}
];
@NgModule({
    imports:[RouterModule.forChild(PipelineRoutes)],
    exports:[RouterModule]
})
export class pipelinerouter{}