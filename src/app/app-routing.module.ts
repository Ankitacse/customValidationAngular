import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterDashboardComponent } from 'src/app/master-dashboard/master-dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./master-login/master-login.module').then(m => m.MasterLoginModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./master-dashboard/master-dashboard.module').then(m => m.MasterDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
