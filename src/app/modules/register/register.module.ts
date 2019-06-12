import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterUserNextPageComponent } from './registeruser-page/registeruser-next-page/registeruser-next-page.component';
import { RegisterEmployeePageComponent } from './registeremployee-page/registeremployee-page.component';
import { RegisterEmployeeNextPageComponent } from './registeremployee-page/registeremployee-next-page/registeremployee-next-page.component';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
