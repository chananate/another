import { FoundUserPageComponent } from './../forgot/found-user-page/found-user-page.component';
import { ForgotRoutingModule } from './../forgot/forgot-routing.module';
import { SigninRoutingModule } from './../signin/signin-routing.module';
import { SigninPageComponent } from './../signin/signin-page/signin-page.component';
import { RegisterRoutingModule } from './../register/register-routing.module';
import { RegisterPageComponent } from './../register/register-page/register-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { PreferenceComponent } from './preference/preference.component';
import { HelperModule } from 'src/app/pipes/helpers.module';


@NgModule({
  declarations: [
    MainPageComponent, PageNotFoundComponent,
    AboutComponent, LayoutComponent,
    UserComponent, PreferenceComponent,
    RegisterPageComponent, SigninPageComponent,
    FoundUserPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    HelperModule,
    MainRoutingModule,
    RegisterRoutingModule,
    SigninRoutingModule,
    ForgotRoutingModule
  ]
})
export class MainModule { }
