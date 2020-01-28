import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';
fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let logstat = ""
  class mockService {
    get()  {
      subscribe :  ()=>{}
    }
  }
  afterEach(function() {
    jasmine.clock().uninstall();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        HttpClientModule,
        // RouterModule
      ],
      providers: [
        HttpClient,
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    jasmine.clock().install();
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('logstat defaults to: false', () => {
    expect(component.logstat).toEqual(false);
  });
  it ('should add two numbers', () => {
    expect (component.sum(5,6)).toEqual(11)
  });
  it ('should successfully login', () => {
    // localStorage.setItem("auth", "")
    // component.logstat = false;
    let f = {
      value: {
        username: 'priston',
        password: 'priston@123'
      }
    }
    // component.geturl(f)
    component.login(f)
    expect(component.logstat).toEqual(false)
  })
  function doSomethingLater(callback) {
    let k = {
      value: {
        username: 'xxxxxxx',
        password: 'xxxxx@123'
      }
    }
    setTimeout(function() {
      callback(k);
    }, 10000);
  }
  it ('unsuccessfull login', () => {
    // localStorage.setItem("auth", "")
    // component.logstat = false;
    let k = {
      value: {
        username: 'xxxxxxx',
        password: 'xxxxx@123'
      }
    }
    // component.login(k)
    console.log("I am here")
    // console.log(component.logstat)
    // expect(component.logstat).toEqual(true)
    // console.log(component.logstat)
    const callback = jasmine.createSpy('callback');
    doSomethingLater(component.login);
    jasmine.clock().tick(10000);
    expect(callback).toHaveBeenCalledWith(k);

  });

  it ('Should return false', () =>  {
    component.tester(true);
    
    expect(component.testers).toEqual(false)
  });

  it ('Should return true', async () =>  {
    await component.tester(false)
    expect(component.testers).toEqual(true)
  })
});
