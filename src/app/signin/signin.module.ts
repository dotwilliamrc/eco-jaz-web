import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { AppSigninModule } from './app-signin.module'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { OneComponent } from './components/one/one.component'
import { SigninComponent } from './pages/signin/signin.component'
import { TwoComponent } from './components/two/two.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    SigninComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppSigninModule,
    SharedModule
  ],
  exports: [
    SigninComponent
  ]
})
export class SigninModule { }
