import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingPageComponent } from './landing/pages/landing-page/landing-page.component'
import { LoginComponent } from './login/pages/login/login.component'

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
