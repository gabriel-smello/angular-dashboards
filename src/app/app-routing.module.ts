import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Dashboard1Component} from "./dashboard1/dashboard1.component";

const routes: Routes = [
  {
    path: '', component: Dashboard1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
