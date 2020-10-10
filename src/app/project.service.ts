import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseURL ="http://localhost:8080/api/v1/project";

  constructor(private httpClient: HttpClient) { }
  getProjectsList(): Observable<Project[]>{

    return this.httpClient.get<Project[]>(`${this.baseURL}`);
  }
  createProject(project: Project): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, project);
  }

  getProjectById(id: number): Observable<Project>{
    return this.httpClient.get<Project>(`${this.baseURL}/${id}`);
  }
  updateProject(id: number, project: Project): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, project);
  }
  deleteProject(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

 
}
