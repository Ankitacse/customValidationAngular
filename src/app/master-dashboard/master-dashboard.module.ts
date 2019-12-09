import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDashboardRoutes } from './master-dashboard.routing';
import { MaterialsModule } from '../core/materials/materials.module';
import { MasterDashboardComponent } from './master-dashboard.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [
    MasterDashboardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    MasterDashboardRoutes
  ]
})
export class MasterDashboardModule { }
