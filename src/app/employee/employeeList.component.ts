import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'list-employee',
    templateUrl: '../employee/employeeList.component.html',
    styleUrls: ['../employee/employeeList.component.css']
})
export class EmployeeListComponent implements OnInit {
    displayedColumns: string[] = ['code', 'name', 'gender', 'annualSalary','dateOfBirth'];

    dataSource = new MatTableDataSource<any>(employees);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
      }
    }

      export interface PeriodicElement {
        code: string;
        name: string;
        gender: string;
        annualSalary: number;
        dateOfBirth: string;
      }
    

    const employees: PeriodicElement[] = [
        {
            code: 'emp101', name: 'Tom', gender: 'Male',
            annualSalary: 5500, dateOfBirth: '25/6/1988'
        },
        {
            code: 'emp102', name: 'Alex', gender: 'Male',
            annualSalary: 5700.95, dateOfBirth: '9/6/1982'
        },
        {
            code: 'emp103', name: 'Mike', gender: 'Male',
            annualSalary: 5900, dateOfBirth: '12/8/1979'
        },
        {
            code: 'emp104', name: 'Mary', gender: 'Female',
            annualSalary: 6500.826, dateOfBirth: '14/10/1980'
        },
    ];
