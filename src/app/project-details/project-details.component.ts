import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { project } from '../project';
import { ProjectService } from '../project.service';
import { User } from '../user';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
id: number
project: project
user:User
 
  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.project= new project();
    this.projectService.getProjectById(this.id).subscribe( data =>{
      this.project =data;
    });

  }

}
