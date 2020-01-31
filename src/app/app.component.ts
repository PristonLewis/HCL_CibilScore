import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-statistic';
  isEmployee = true;
  isSignout = true;
  constructor(private auth: AuthService, private router: Router){}
  ngOnInit(){
    this.auth.subject.subscribe((data) => {
      console.log("subject", data)
      if(data == "Employee")
        this.isEmployee = true;
      else
        this.isEmployee = false;  
      this.isSignout = false;  
    });
  }
  public signout(){
    localStorage.setItem("auth", "false")
    localStorage.setItem("user", "")
    this.router.navigate(['/login']);
    this.isSignout = true;
  }
}
