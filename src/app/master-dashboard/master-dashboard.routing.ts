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
            { path: 'customers', loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule) }
        ]
    }
];

export const MasterDashboardRoutes: ModuleWithProviders = RouterModule.forChild(masterDashboardRoutes);
