import { Component  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'project-tracker';

  isLoggedIn = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }



  handleLogout() {
    this.authenticationService.logout();
  }

}
