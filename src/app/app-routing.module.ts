import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from 'src/app/signup/signup.component';
import { LoginComponent } from 'src/app/login/login.component';
import { MasterLoginComponent } from 'src/app/master-login/master-login.component';


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
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
