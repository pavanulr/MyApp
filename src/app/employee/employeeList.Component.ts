import {Component,OnInit} from '@angular/core';
import{IEmployee} from './employee';
import{EmployeeService} from './employee.Service';

@Component({
    selector:'list-employee',
    templateUrl:'./employeeList.Component.html',
    styleUrls:['./employeeList.Component.css'],
    providers:[EmployeeService]
})



export class EmployeeListComponent implements OnInit{
    employees: IEmployee[];
    //employees: any[];
    selectedEmployeeCountRadioButton:string='All';

    constructor(private _employeeService :EmployeeService){
       

    }

    ngOnInit(){
        //this.employees= this._employeeService.getEmployees();
        this._employeeService.getEmployees()
                            .subscribe(resEmployeeData => this.employees=resEmployeeData);
    }

    getEmployees():void{
        this.employees=
        [
            
        ]
    }

    trackByEmpCode(index:number,employee:any):string{
        return employee.code;
    }

    getTotalEmployeesCount():number{
        return this.employees.length;
    }

    getMaleEmployeesCount():number{
        return this.employees.filter(e=>e.gender==='Male').length;
    }

    getFemaleEmployeesCount():number{
        return this.employees.filter(e=>e.gender=='Female').length;
    }

    onEmployeecountRadioButtonChanged(selectedRadioButtonValue:string):void{
        this.selectedEmployeeCountRadioButton=selectedRadioButtonValue;
    }
}