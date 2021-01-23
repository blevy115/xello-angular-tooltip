import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipsPage } from './pages/tooltips/tooltips.page'


const routes: Routes = [
  {
    path:'', 
    redirectTo: 'tooltips', 
    pathMatch:'full'
  },
  {
    path: 'tooltips',
    component: TooltipsPage
  },
  {
    path: '**', 
    redirectTo: 'tooltips', 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
