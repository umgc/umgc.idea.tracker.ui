import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-proposal-table',
  templateUrl: './proposal-table.component.html',
  styleUrls: ['./proposal-table.component.css']
})
export class ProposalTableComponent implements OnInit {

  projects: project[];
  displayedColumns: string[] = ['Project Title','Project Description','Project Website', 'Comment','action','update','delete'];
dataSource: MatTableDataSource<any>;

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.getProjects();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  private getProjects(){
    this.projectService.getProjectsList().subscribe(data=>{
      this.projects = data;
      this.dataSource = new MatTableDataSource(this.projects);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.sort;
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

