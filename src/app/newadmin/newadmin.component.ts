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
  tempUser: User = null;
  alert:boolean=false;
  alertPassword:boolean = false;
  alertUserExists: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submitAdmin(){

    this.errorFlag = false;
    this.account.username = this.user.email;
    this.account.isEnabled = true;
    this.usr_Type.id = 1;
    this.usr_Type.utype_descr = "PROFESSOR";
    this.user.setUsrType(this.usr_Type);
    this.checkErrors();

  }

  saveAdminUser(){
      this.userService.createUser(this.user).subscribe(data =>{
        console.log("saveAdminUser");
        this.tempUser = data as User;
        this.account.user_id = this.tempUser.id;
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
    this.errorFlag = false;
    if(this.password2 != this.account.password)
    {  
      console.log("passwords dont match");
      this.errorFlag = true;
      this.alert=true;
      this.alertPassword=true;
    }
    this.userService.getUser(this.user.email).subscribe(data =>{
      console.log("get user");
      this.tempUser = data as User;
      console.log(this.tempUser);
      if(this.tempUser === null)
      {
        console.log("saving user ");
        this.saveAdminUser();
      }
      else
      {
        console.log("this user already exists");
        this.alert=true;
        this.alertUserExists=true;
      }
      console.log("-------end of get user--------");

    },
    error => console.log(error));


  }

  cancelAdmin()
  {
    
    this.router.navigate(['/proposal']);
  }

  closeAlert(){
    this.alert=false
  }
}

