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
  constructor(private auth: AuthService, private router: Router){}
  public signout(){
    localStorage.setItem("auth", "false")
    localStorage.setItem("user", "")
    // this.auth.changeAuth("Login");
    this.router.navigate(['/login']);
  }
}
