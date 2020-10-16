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

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.projectService.getProjectById(this.id).subscribe(data =>{

      this.project =data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.projectService.updateProject(this.id, this.project).subscribe(data =>{
      this.goToProjectList();
    
    }, 
    error => console.log(error));
  }
  goToProjectList(){

    this.router.navigate(['/project']);
  }
}
