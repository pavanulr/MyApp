import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{HttpModule} from '@angular/http';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{EmployeeComponent} from './employee/employee.component';
import{EmployeeListComponent} from './employee/employeeList.Component';
import{EmployeeTitlepipe} from './employee/employeeTitle.pipe';
import{EmployeeCountComponent} from './employee/employeeCount.Component';
import{DataService} from './data.service';
//import { AppRoutingModule } from './core/app.routing.module';



@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,EmployeeListComponent,EmployeeTitlepipe,EmployeeCountComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    AppRoutingModule,FormsModule,BrowserAnimationsModule
  ],
  exports:[EmployeeListComponent],
  //providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
