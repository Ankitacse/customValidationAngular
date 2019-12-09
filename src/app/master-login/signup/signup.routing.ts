import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';

const signupRoutes: Routes = [
    { path: '', component: SignupComponent, data: {animation: 'SignupPage'}}
];

export const SignupRoutes: ModuleWithProviders = RouterModule.forChild(signupRoutes);
