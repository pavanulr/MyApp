import{Injectable} from '@angular/core';
import{IEmployee} from './employee';
import{Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class EmployeeService{
     _url:string='./assets/employeedata.json'

constructor(private _http:Http){}

    getEmployees() :Observable<IEmployee[]>{
        return this._http.get(this._url)
        .map((response :Response) => <IEmployee[]>response.json());
    }

}