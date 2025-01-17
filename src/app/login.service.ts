import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginViewModel } from './login-view-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpClient:HttpClient)
  {

  }
  currentUserName: any = null;
  public Login(loginViewModel: LoginViewModel): Observable<any>
  {
    return this.httpClient.post<any>("http://127.0.0.1:8000/api/login/", loginViewModel, { responseType: "json" })
      .pipe(map(user =>
      {
        if (user)
        {
          this.currentUserName = user.username;
        }
        return user;
      }));
  }

  public Logout()
  {
    this.currentUserName = null;
  }
}
  

