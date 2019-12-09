import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutes } from './login.routing';
import { LoginComponent } from './login.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutes,
    MaterialsModule
  ]
})
export class LoginModule { }
