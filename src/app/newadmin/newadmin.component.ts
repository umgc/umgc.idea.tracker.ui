import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Account } from '../account';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { usr_Type } from '../usr_Type';

@Component({
  selector: 'app-newadmin',
  templateUrl: './newadmin.component.html',
  styleUrls: ['./newadmin.component.css']
})
export class NewadminComponent implements OnInit {

  user: User = new User();
  account: Account = new Account();
  password2: String = new String();
  errorFlag: Boolean = false;
  usr_Type: usr_Type = new usr_Type();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submitAdmin(){

    
    this.account.username = this.user.email;
    this.account.isEnabled = true;
    this.usr_Type.id = 1;
    this.usr_Type.utype_descr = "PROFESSOR";
    this.user.setUsrType(this.usr_Type);
    this.checkErrors();
    if(this.errorFlag == false)
    {
      this.saveAdminUser();
    }

  }

  saveAdminUser(){
      this.userService.createUser(this.user).subscribe(data =>{
        console.log("Admin user save");
        this.user = data as User;
        console.log(data);
        console.log(this.user);
        this.account.user_id = this.user.id;
        console.log("account to be saved");
        console.log(this.account);
        console.log("trying account save within admin save");
        this.saveAccount();
      },
     error => console.log(error));

     
   }

   saveAccount()
   {
    this.userService.createAccount(this.account).subscribe(data =>{
      console.log("Account Saved")
      console.log(data);
    },
    error => console.log(error));
    this.goToHome();
  }

   goToHome(){
    this.router.navigate(['/home']);

  }

  checkErrors()
  {
    if(this.password2 != this.account.password)
    {  
      this.errorFlag = true;
    }
    

  }

}
