import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastModule} from "primeng/toast";
import {NgxEchartsModule} from "ngx-echarts";
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import { CadastroComponent } from './cadastro/cadastro.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PaginatorModule} from "primeng/paginator";
import {InputTextareaModule} from "primeng/inputtextarea";
import {TooltipModule} from "primeng/tooltip";
import {ToggleButtonModule} from "primeng/togglebutton";

@NgModule({
  declarations: [
    AppComponent,
    Dashboard1Component,
    Dashboard2Component,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ToastModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    CalendarModule,
    DropdownModule,
    ReactiveFormsModule,
    PaginatorModule,
    InputTextareaModule,
    TooltipModule,
    ToggleButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
