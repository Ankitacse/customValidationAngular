import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterLoginComponent } from './master-login.component';
import { MasterLoginRoutes } from './master-login.routing';
import { MaterialsModule } from '../core/materials/materials.module';


@NgModule({
  declarations: [
    MasterLoginComponent
  ],
  imports: [
    CommonModule,
    MasterLoginRoutes,
    MaterialsModule
  ]
})
export class MasterLoginModule { }
