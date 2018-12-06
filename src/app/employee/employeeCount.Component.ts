import { Component,Input,Output,EventEmitter } from "@angular/core";


@Component({
    selector:'employee-count',
    templateUrl:'./employeeCount.Component.html',
    styleUrls:['./employeeCount.Component.css']
})

export class EmployeeCountComponent{
    @Input()
    all:number;

    @Input()
    male:number;

    @Input()
    female:number;

    selectedRadioButtonValue:string='All';
    @Output()
    countRadioButtonSelectedchanged:EventEmitter<string>=new EventEmitter<string>();

    onRadioButtonSelectedchanged(){
        this.countRadioButtonSelectedchanged.emit(this.selectedRadioButtonValue);
    }


}