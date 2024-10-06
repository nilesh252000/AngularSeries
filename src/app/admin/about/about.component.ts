import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/service/userdata.service'
import { Project } from 'src/app/project';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit{
  title='Service in Angular'
  projects: Project[] =[]
  newProject: Project = new Project();
  editProject:Project=new Project();
  editIndex: any = null;
  deleteProject:Project=new Project();
  deleteIndex: any = null;
  
  constructor(private userData:UserdataService)
  {
    
  }
  ngOnInit(): void
  {
    this.userData.getAllProjects().subscribe(
      (response: Project[]) => {
        this.projects=response
      }
    );
    
  }
  onSaveClick()
  {
    this.userData.saveUsers(this.newProject).subscribe((response) => {
      //Add Project to Grid
      var p: Project = new Project();
      p.projectID = response.projectID;
      p.projectName = response.projectName;
      p.dateOfStart = response.dateOfStart;
      p.teamSize = response.teamSize;
      this.projects.push(p);

      //Clear New Project Dialog - TextBoxes
      this.newProject.projectID = null;
      this.newProject.projectName = null;
      this.newProject.dateOfStart = null;
      this.newProject.teamSize = null;
      //console.warn("data",response);
      //this.projects.push(this.newProject);
      
    });
  }
  onEditClick(event:any,index:number)
  {
    this.editProject.id = this.projects[index].id;
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }
  onUpdateClick(id: number)
  {
    this.userData.updateProject(this.editProject).subscribe((response:Project) =>
    {
      var p: Project = new Project();
      p.id = response.id;
      p.projectID = response.projectID;
      p.projectName = response.projectName;
      p.dateOfStart = response.dateOfStart;
      p.teamSize = response.teamSize;
      this.projects[this.editIndex] = p;

      this.editProject.id = null;
      this.editProject.projectID = null;
      this.editProject.projectName = null;
      this.editProject.dateOfStart = null;
      this.editProject.teamSize = null;

    });
  }
  onDeleteClick(event: any, index: number)
  {
    this.deleteProject.id = this.projects[index].id;
    this.deleteProject.projectID = this.projects[index].projectID ;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;
    this.deleteIndex = index;
  }
  onDeleteConfirmClick(id:number)
  {
    this.userData.deleteProject(this.deleteProject.id).subscribe((response) =>
    {
      console.warn("data",response);
      this.projects.splice(this.deleteIndex, 1);
      this.deleteProject.id = null;
      this.deleteProject.projectID= null;
      this.deleteProject.projectName = null;
      this.deleteProject.teamSize = null;
      this.deleteProject.dateOfStart = null;
     });
    }
  }