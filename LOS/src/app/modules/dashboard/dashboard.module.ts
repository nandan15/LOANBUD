import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
