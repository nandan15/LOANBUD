import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'shared',loadChildren:()=>import('../app/modules/shared/shared.module').then(m => m.SharedModule)},
  {path:'dashboard',loadChildren:()=>import('../app/modules/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'pipeline',loadChildren:()=>import('../app/modules/pipeline/pipeline.module').then(m=>m.PipelineModule)},
  {path:'usercontacts',loadChildren:()=>import('../app/modules/usercontacts/usercontacts.module').then(m=>m.UsercontactsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
