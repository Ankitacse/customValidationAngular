import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { SignupRoutes } from './signup.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialsModule,
    SignupRoutes
  ]
})
export class SignupModule { }
