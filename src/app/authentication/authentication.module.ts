import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from '../angular-material.module';




@NgModule({
  declarations: [LogInComponent, RegisterComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    LogInComponent,
    RegisterComponent,
    AngularMaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthenticationModule { }
