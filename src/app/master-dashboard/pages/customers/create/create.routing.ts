import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create.component';

const customerCreateRoutes: Routes = [
    { path: '', component: CreateComponent, data: {animation: 'Create'} }
];

export const CustomerCreateRoutes: ModuleWithProviders = RouterModule.forChild(customerCreateRoutes);