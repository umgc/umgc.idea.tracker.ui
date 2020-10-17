import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { project } from '../project';
import { ProjectService } from '../project.service';
import { User } from '../user';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  alert:boolean=false
  
  
  project: project = new project();
  user: User = new User();
  
  

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
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
    
    this.project.setUser(this.user);
    console.log(this.project)
    this.saveProject();
    this.alert=true;
    
    
    
    
    


  }
  closeAlert(){
    this.alert=false
  }

}
