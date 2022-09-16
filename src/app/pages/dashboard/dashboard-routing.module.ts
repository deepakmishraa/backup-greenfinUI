import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KycpageComponent } from './components/kycpage/kycpage.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';

const routes: Routes = [
  {
    path: 'kycuplaod',
    component: KycpageComponent
  },
  {
    path: 'dashboard',
    component: UserdashboardComponent
  },
  {
    path: 'profile',
    component: ProfilepageComponent
  },
  {
    path: '**',
    component: KycpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
