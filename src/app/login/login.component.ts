import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appComponent: AppComponent ,
    private authenticationService: AuthenticationService) {   }
    

  ngOnInit(): void {
  }


  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.appComponent.isLoggedIn = this.authenticationService.isUserLoggedIn();
      this.router.navigate(['/proposal']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }


}
