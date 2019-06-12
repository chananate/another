import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { HelperModule } from 'src/app/pipes/helpers.module';

import { ForgotRoutingModule } from './forgot-routing.module';
import { FoundUserPageComponent } from './found-user-page/found-user-page.component';
import { SentOtpPageComponent } from './sent-otp-page/sent-otp-page.component';
import { InputOtpPageComponent } from './input-otp-page/input-otp-page.component';

@NgModule({
  declarations: [
    FoundUserPageComponent
    , SentOtpPageComponent, InputOtpPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    HelperModule,
    ForgotRoutingModule
  ]
})
export class ForgotModule { }
