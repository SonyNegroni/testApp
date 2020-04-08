import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    LogInComponent,
    AngularMaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthenticationModule { }
