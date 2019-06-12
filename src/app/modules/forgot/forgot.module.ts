import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotRoutingModule } from './forgot-routing.module';
import { FoundUserPageComponent } from './found-user-page/found-user-page.component';

@NgModule({
  declarations: [FoundUserPageComponent],
  imports: [
    CommonModule,
    ForgotRoutingModule
  ]
})
export class ForgotModule { }
