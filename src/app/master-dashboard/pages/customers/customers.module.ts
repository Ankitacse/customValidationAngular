import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutes } from './customers.routing';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutes,
    MaterialsModule
  ]
})
export class CustomersModule { }
