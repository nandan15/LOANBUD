import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineComponent } from './pipeline/pipeline.component';
import { PipelineMainComponent } from './pipeline-main/pipeline-main.component';
import {  pipelinerouter } from './pipeline.router';


@NgModule({
  declarations: [
    PipelineComponent,
    PipelineMainComponent
  ],
  imports: [
    CommonModule,
    pipelinerouter
  ]
})
export class PipelineModule { }
