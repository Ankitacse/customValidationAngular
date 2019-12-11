import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutes } from './login.routing';
import { LoginComponent } from './login.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    LoginRoutes,
    MaterialsModule
  ]
})
export class LoginModule { }
