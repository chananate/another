import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeRoutingModule } from './change-routing.module';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';

@NgModule({
  declarations: [ChangePwdComponent],
  imports: [
    CommonModule,
    ChangeRoutingModule
  ]
})
export class ChangeModule { }
