import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public  subject = new Subject<string>();
  public isAuthenticated(){
    return localStorage.getItem("auth") == "true"
  }

  public changeAuth(username){    
    this.subject.next(username);
  }
  
}
