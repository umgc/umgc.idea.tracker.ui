import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Project} from '../project'
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.getProjects();
  }
  private getProjects(){
    this.projectService.getProjectsList().subscribe(data=>{
      this.projects = data;
    })
  }
  ProjectDetails (id: number){
    this.router.navigate(['project-details' , id]);

  }

  updateProject(id: number){

    this.router.navigate(['update-project' , id]);
  }
  deleteProject(id: number){
    this.projectService.deleteProject(id).subscribe( data =>{
      console.log(data);
      this.getProjects();
    })
  }

}
