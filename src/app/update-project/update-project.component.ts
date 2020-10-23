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
  
}
