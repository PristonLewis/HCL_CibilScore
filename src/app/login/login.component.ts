import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(public httpClient: HttpClient,
     public router: Router,
      private auth: AuthService
      ) { }
  // constructor(public httpClient: HttpClient, public router: Router, private auth: AuthService) { }

  ngOnInit() {
  }
  public logstat=false;
  public testers = false;
  public geturl(f) {
    return "http://10.117.189.78:8081/resource/employees?mailId="+f.value.username+"&password="+f.value.password;
    // return "http://localhost:3000/users?username="+f.value.username+"&password="+f.value.password
  }
  public login(f): void{
    this.logstat = false;
    let url = this.geturl(f);
    this.httpClient.post(url,{}).subscribe((data: any) => {
        this.logstat = false;
        localStorage.setItem("auth", "true")
        localStorage.setItem("role", data.role)
        localStorage.setItem("user", f.value.username)
        // data.role = "admin";
        this.auth.changeAuth(data.role)
        if(data.role == "Manager"){
          this.router.navigate(['/home']);
        }
        else {
          this.router.navigate(['/recomended']);  
        }
        // this.auth.changeAuth(f.value.username);
    }, (exception) =>{
      this.logstat = true;
    })
  }

  public sum(a,b){
    let c = a + b;
    return c
  }

  public tester(flag){
    this.testers = !flag
  }

}
