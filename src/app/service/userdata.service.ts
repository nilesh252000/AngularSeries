import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Project } from '../project';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  constructor(private httpClient: HttpClient)
  {

  }
  getAllProjects(): Observable<Project[]> 
  {
    return this.httpClient.get<Project[]>("http://127.0.0.1:8000/my/get_record"); 
  }
  saveUsers(newProject:Project): Observable<Project[]> 
  {
    return this.httpClient.post<Project[]>("http://127.0.0.1:8000/my/post",newProject);
  }
  updateProject(existingProject:Project):Observable<Project>
  {
      const url = `http://127.0.0.1:8000/my/project/${existingProject.id}`;
     return this.httpClient.patch<Project>(url, existingProject);
  }
  
  //updateProject(existingProject: Project): Observable<Project> {
    //const url = `http://127.0.0.1:8000/my/project/${existingProject.projectID}`;
    //return this.httpClient.patch  <Project>(url, existingProject);
//}
 // deleteProject(ProjectID:number):Observable<any>
  //{
    //return this.httpClient.delete<any>("http://localhost:3000/Project?ID=" + ProjectID);
  //}
  deleteProject(ProjectID: number): Observable<string> {
    const url = `http://127.0.0.1:8000/my/delete/${ProjectID}`;
    return this.httpClient.delete<string>(url);
  }
  

    
  
  
}
