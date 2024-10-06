import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from '../login-view-model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginViewModel: LoginViewModel = new LoginViewModel();
  loginError: string = "";
constructor(private loginService:LoginService,private router: Router) { }

onLoginClick(event: any)
  {
    this.loginService.Login(this.loginViewModel).subscribe(
      (response) =>
      {
        this.router.navigateByUrl("/dashboard");
      },
      (error) =>
      {
        console.log(error);
        this.loginError = "Invalid Username or Password";
      },
    );
  }

}