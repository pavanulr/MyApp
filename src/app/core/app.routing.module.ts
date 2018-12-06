import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {EmployeeListComponent} from '../employee/employeeList.component';
import{PageNotFound} from '../app.pagenotfound';


const routes: Routes = [
  { path: 'employee', component: EmployeeListComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},
  {path:'pagenotfound',component:PageNotFound}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }