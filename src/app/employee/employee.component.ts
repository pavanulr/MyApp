import {Component} from '@angular/core'
import { ComponentFactoryBoundToModule } from '@angular/core/src/linker/component_factory_resolver';

@Component({
    selector:'my-employee',
    templateUrl:'./employee.component.html',
    styleUrls:['./employee.component.css']
})

export class EmployeeComponent{    
    imagePath:string='Tom.png';
    firstName:string='Tom';
    lastName: string='Hopkins';
    gender:string='Male';
    age:string='21';
    showdetails:boolean=false;

    toggledetails():void{
        this.showdetails=!this.showdetails;
    }
}
