import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
    { path: '', component: DashboardComponent }
];

export const DashboardRoutes: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
