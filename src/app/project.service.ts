import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { project } from './project';
import { ProjectRequest } from './project-request';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectRequest: ProjectRequest = new ProjectRequest();
  private baseURL ="http://localhost:8080/api/v1/findAllProposal";
  private baseURL2 ="http://localhost:8080/api/v1/submitProject";

  constructor(private httpClient: HttpClient) { }
  getProjectsList(): Observable<project[]>{

    return this.httpClient.get<project[]>(`${this.baseURL}`);
  }
  createProject(project: project): Observable<Object>{
    // let request= JSON.stringify(body);
    this.projectRequest.setprojectRequest(project)
    console.log( JSON.stringify(this.projectRequest));
    return this.httpClient.post(`${this.baseURL2}`,this.projectRequest);
  }

  getProjectById(id: number): Observable<project>{
    return this.httpClient.get<project>(`${this.baseURL}/${id}`);
  }
  updateProject(id: number, project: project): Observable<Object>{
    this.projectRequest.setprojectRequest(project)
    return this.httpClient.put(`${this.baseURL}/${id}`, this.projectRequest);
  }
  deleteProject(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

 
}
