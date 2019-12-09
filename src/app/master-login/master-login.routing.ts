import { Routes, RouterModule } from '@angular/router';
import { MasterLoginComponent } from './master-login.component';
import { ModuleWithProviders } from '@angular/core';

const masterLogin: Routes = [
    {
        path: '',
        component: MasterLoginComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login',
                loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
            },
            {
                path: 'signup',
                loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
            }
        ]
    }
];

export const MasterLoginRoutes: ModuleWithProviders = RouterModule.forChild(masterLogin);
