import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { project } from '../project';
import { ProjectService } from '../project.service';
import { Status } from '../status';
import { User } from '../user';
import { usr_Type } from '../usr_Type';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  alert:boolean=false;
  usrType:String;
  
  
  project: project = new project();
  user: User = new User();
  status: Status = new Status();
  usr_Type: usr_Type = new usr_Type();
  
  

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.usr_Type.id = 3;
    this.usr_Type.utype_descr ="Other";
    this.user.setUsrType(this.usr_Type);
  }
  saveProject(){
   this.projectService.createProject(this.project).subscribe(data =>{
      console.log(data);
      this.goToProjectList();
    },
    error => console.log(error));
  }
  goToProjectList(){
    this.router.navigate(['/home']);

  }


  onSubmit(){
    this.status.status_descr = "Pending";
    this.status.id=1;
    this.project.setStatus(this.status);
    this.project.setUser(this.user);
    console.log(this.project)
    this.saveProject();
    this.alert=true;
    
    
    
    
    


  }
  closeAlert(){
    this.alert=false
  }
  onUserTypeChange(val) {
    
    console.log("Selected user_type is "+ val);

    
    this.usrType=val;
    switch (this.usrType){
      case "2":
        this.user.usr_Type.id = 2;
        this.user.usr_Type.utype_descr ="Liaison";
        break;
      case "1":
        this.user.usr_Type.id = 1;
        this.user.usr_Type.utype_descr ="Sponsor";
        break;
        case "3":
          this.user.usr_Type.id = 3;
          this.user.usr_Type.utype_descr ="Other";
          break;
    }
   }
}
