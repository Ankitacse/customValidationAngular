import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterLoginComponent } from 'src/app/master-login/master-login.component';
import { MasterDashboardComponent } from 'src/app/master-dashboard/master-dashboard.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/login/login.component';
import { SignupComponent } from 'src/app/signup/signup.component';


const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {
    path: 'user',
    component: MasterLoginComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  {
    path:'app',
    component: MasterDashboardComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
