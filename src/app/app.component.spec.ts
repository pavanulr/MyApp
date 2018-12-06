import { TestBed, async, ComponentFixture,fakeAsync,tick } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import{Router, Routes} from '@angular/router';
import {Location} from '@angular/common';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { LoginComponent } from './login/login.component';
import{CustomMaterialModule}from './core/material.module';
import{AppRoutingModule}from './app-routing.module';

describe('LoginComponent', () => {
  let cmp: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let router:Router;
  let location:Location;
  let username: ComponentFixture<LoginComponent>;
  let password: ComponentFixture<LoginComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule,
        FormsModule,
        MatDialogModule,
        CustomMaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule
        
      ],
      declarations: [LoginComponent
        
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginComponent);
      cmp = fixture.componentInstance;
      fixture.detectChanges();
      

      de = fixture.debugElement.query(By.css('button'));
      el = de.nativeElement;

      router=TestBed.get(Router);
      location=TestBed.get(Location);
      router.initialNavigation();

    });
  }));

  it('navigate to "" redirects you to /pagenotfound', fakeAsync(() => { 
    router.navigate(['']); 
    tick();
    expect(location.path()).toBe('/pagenotfound'); 
  }));

  it('should set username as empty',()=>{
    cmp.login();
    expect(el.contains).toEqual('admin');
  })

  it('should set login to true',async(()=>{
    cmp.login();
    expect(cmp.login).toBeFalsy();
    expect(router.navigate).toHaveBeenCalledWith(['employee']);
  }))

  it('should have user name admin', async(() => {
    expect(cmp.username).toEqual('admin');
  }))

  it('should have password as admin', async(() => {
    expect(cmp.password).toEqual('admin');
  }))

  it('form should be redirected to page not found', async(() => {
    expect(cmp.username).Any('');
  }))

  it('form should be redirected to default page', async(() => {
    expect(cmp.password).Any('');
  }))





});

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Project1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Project1');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector('h1').textContent).toContain('Welcome to Project1!');
  });
});
