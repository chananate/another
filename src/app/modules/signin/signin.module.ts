import { SigninPageComponent } from './signin-page/signin-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';



@NgModule({
  declarations: [SigninPageComponent],
  imports: [
    CommonModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
