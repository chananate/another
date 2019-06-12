import { ChangePwdComponent } from './../change/change-pwd/change-pwd.component';
import { InputOtpPageComponent } from './../forgot/input-otp-page/input-otp-page.component';
import { SentOtpPageComponent } from './../forgot/sent-otp-page/sent-otp-page.component';
import { FoundUserPageComponent } from './../forgot/found-user-page/found-user-page.component';
import { SigninPageComponent } from './../signin/signin-page/signin-page.component';
import { RegisterPageComponent } from './../register/register-page/register-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuardService } from './../../services/auth-guard.service';

import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { PreferenceComponent } from './preference/preference.component';


const routes: Routes = [
  {
    path: 'main',
    component: LayoutComponent,
    // canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainPageComponent },
      { path: 'user', component: UserComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: 'signin', component: SigninPageComponent },
      { path: 'found-user', component: FoundUserPageComponent },
      { path: 'sent-otp', component: SentOtpPageComponent },
      { path: 'input-otp', component: InputOtpPageComponent },
      { path: 'change-pwd', component: ChangePwdComponent },
      { path: 'preference', component: PreferenceComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', component: PageNotFoundComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
