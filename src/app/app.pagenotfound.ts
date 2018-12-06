import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector:'pagenotfound',
    templateUrl:'./app.pagenotfound.html'

})

export class PageNotFound{

  constructor(private _location: Location) 
  {}

  backClicked() {
    this._location.back();
  }

}