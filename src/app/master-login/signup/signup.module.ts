import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { SignupRoutes } from './signup.routing';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    SignupRoutes
  ]
})
export class SignupModule { }
