import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [
    AppComponent,
    Dashboard1Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        InputTextModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
