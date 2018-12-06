import { Component } from '@angular/core';


@Component({
  selector: 'app-root',  
  template:`<div>
  <list-employee><list-employee>        
             <div>`                   
})
export class AppComponent {
  isBold:boolean=true;
  fontsize:number=40;
  isItalics:boolean=true;

  addStyles(){
    let style={
      'font-weight':this.isBold?'bold':'normal',
      'font-style':this.isItalics?'italic':'normal',
      'font-size.px':this.fontsize

    };
    return style;
  }
  onClick():void{
    console.log("Button clicked!");
  }
  }
  

  


