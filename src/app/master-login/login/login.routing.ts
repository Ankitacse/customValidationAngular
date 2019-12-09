import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const loginRoute: Routes = [
    { path: '', component: LoginComponent }
];

export const LoginRoutes: ModuleWithProviders = RouterModule.forChild(loginRoute);
