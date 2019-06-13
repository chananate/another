import { InformationPageComponent } from './information-page/information-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';



@NgModule({
  declarations: [InformationPageComponent],
  imports: [
    CommonModule,
    InformationRoutingModule
  ]
})
export class InformationModule { }
