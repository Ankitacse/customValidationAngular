import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { CreateComponent } from './create.component';
import { CustomerCreateRoutes } from './create.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerCreateRoutes,
    MaterialsModule
  ]
})
export class CustomerCreateModule { }