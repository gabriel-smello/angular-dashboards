import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Dashboard1Component} from "./dashboard1/dashboard1.component";
import {Dashboard2Component} from "./dashboard2/dashboard2.component";

const routes: Routes = [
  {
    path: '', component: Dashboard1Component
  },
  {
    path: 'simples', component: Dashboard1Component
  },
  {
    path: 'avancado', component: Dashboard2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
