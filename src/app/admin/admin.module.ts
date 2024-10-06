import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { UserdataService } from '../service/userdata.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, MyProfileComponent, AboutComponent],
  imports: [CommonModule,FormsModule],
  exports: [DashboardComponent, MyProfileComponent, AboutComponent],
  providers: [UserdataService]
})
export class AdminModule {}
