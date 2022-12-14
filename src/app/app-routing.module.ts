import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  {
    path: 'user', loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
