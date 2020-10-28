import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  id: number;
  project: project = new project();
  status: String;
  usr_Type: String;
  alert:boolean=false;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.projectService.getProjectById(this.id).subscribe(data =>{

      this.project =data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.projectService.updateProject(this.id, this.project).subscribe(data =>{
 //     this.goToProjectList();
        this.alert=true;
        console.log("this.alert is  " + this.alert);
    }, 
    error => console.log(error));
    
  }
  goToProjectList(){

    this.router.navigate(['/proposal']);
  }

  onNameChange(val) {
    
    console.log("Selected status is "+ val);

    
    this.status=val;
    switch (this.status){
      case "2":
        this.project.status.id = 2;
        this.project.status.status_descr ="Approved";
        break;
      case "1":
        this.project.status.id = 1;
        this.project.status.status_descr ="Pending";
        break;
        case "3":
          this.project.status.id = 3;
          this.project.status.status_descr ="Rejected";
          break;
    }
   }

   onUserTypeChange(val) {
    
    console.log("Selected user_type is "+ val);

    
    this.usr_Type=val;
    switch (this.usr_Type){
      case "2":
        this.project.user.usr_Type.id = 2;
        this.project.user.usr_Type.utype_descr ="Liaison";
        break;
      case "1":
        this.project.user.usr_Type.id = 1;
        this.project.user.usr_Type.utype_descr ="Sponsor";
        break;
        case "3":
          this.project.user.usr_Type.id = 3;
          this.project.user.usr_Type.utype_descr ="Other";
          break;
    }
   }

   closeAlert(){
    this.alert=false
  }
  
}
