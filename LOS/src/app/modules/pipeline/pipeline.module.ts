import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineComponent } from './pipeline/pipeline.component';
import { PipelineMainComponent } from './pipeline-main/pipeline-main.component';
import {   pipelinerouter,} from './pipeline.router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    PipelineComponent,
    PipelineMainComponent
  ],
  imports: [
    CommonModule,
    pipelinerouter,
    MatIconModule,
    MatButtonModule,
  ]
})
export class PipelineModule { }
