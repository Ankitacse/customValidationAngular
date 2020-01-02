import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterDashboardComponent } from './master-dashboard.component';

const masterDashboardRoutes: Routes = [
    {
        path: '',
        component: MasterDashboardComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'customers', loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule) },
            // tslint:disable-next-line:max-line-length
             { path: 'create-customer', loadChildren: () => import('./pages/customers/create/create.module').then(m => m.CustomerCreateModule) }
        ]
    }
];

export const MasterDashboardRoutes: ModuleWithProviders = RouterModule.forChild(masterDashboardRoutes);
