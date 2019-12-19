import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAccessGuard } from './core/guard/login-access.guard';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./master-login/master-login.module').then(m => m.MasterLoginModule)
  },
  {
    path: 'app',
    canActivate: [LoginAccessGuard],
    loadChildren: () => import('./master-dashboard/master-dashboard.module').then(m => m.MasterDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
