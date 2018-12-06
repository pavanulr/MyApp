import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './core/app.routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatPaginatorModule } from '@angular/material';
import{MatDialogModule} from '@angular/material';

import {ComponentOne} from './component-one';
import {ActivateGuards} from './activate-guard';
import { EmployeeListComponent } from './employee/employeeList.component';
import{PageNotFound} from './app.pagenotfound';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComponentOne,
    EmployeeListComponent,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatDialogModule
    
  ],
  providers: [ActivateGuards],
  bootstrap: [AppComponent]
})
export class AppModule { }
