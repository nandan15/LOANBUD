import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';
import { dashboardrouter } from './dashboard.router';


@NgModule({
  declarations: [
    DashboardComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    dashboardrouter
  ]
})
export class DashboardModule { }
