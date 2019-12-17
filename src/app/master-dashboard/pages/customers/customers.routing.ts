import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

const customerRoutes: Routes = [
    { path: '', component: CustomersComponent, data: {animation: 'Customers'} }
];

export const CustomerRoutes: ModuleWithProviders = RouterModule.forChild(customerRoutes);
