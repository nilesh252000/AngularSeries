import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [ 
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path: "dashboard", component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }