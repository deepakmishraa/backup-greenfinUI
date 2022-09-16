import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { OutletdashboardComponent } from './components/outletdashboard/outletdashboard.component';
import { KycpageComponent } from './components/kycpage/kycpage.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';


@NgModule({
  declarations: [
    OutletdashboardComponent,
    KycpageComponent,
    ProfilepageComponent,
    UserdashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
