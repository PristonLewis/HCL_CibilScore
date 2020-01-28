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
    return "http://localhost:3000/users?username="+f.value.username+"&password="+f.value.password
  }
  public login(f): void{
    this.logstat = false;
    console.log(f.value)
    let url = this.geturl(f);
    this.httpClient.get(url).subscribe((data: Array<any>) => {
      console.log("data.length", data.length)
      if(data.length){
        this.logstat = false;
        localStorage.setItem("auth", "true")
        localStorage.setItem("user", f.value.username)
        this.router.navigate(['/alllist']);
        this.auth.changeAuth(f.value.username);
        console.log('logstat if', this.logstat)
      } else {
        this.logstat = true;
        console.log('loagstat else', this.logstat)
      }
    })
  }

  public sum(a,b){
    let c = a + b;
    return c
  }

  public tester(flag){
    this.testers = !flag
    console.log(this.testers)
  }

}
