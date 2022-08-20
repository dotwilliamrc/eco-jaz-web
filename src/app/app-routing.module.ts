import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingPageComponent } from './landing/pages/landing-page/landing-page.component'
import { LoginComponent } from './login/pages/login/login.component'
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main/materiales',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingPageComponent,
    pathMatch: 'full',
    ...canActivate(() => redirectLoggedInTo(['/main']))
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    ...canActivate(() => redirectLoggedInTo(['/main']))
  },
  {
    path: 'signin',
    loadChildren: async () => (await import('./signin/signin.module')).SigninModule,
    ...canActivate(() => redirectLoggedInTo(['/main']))
  },
  {
    path: 'main',
    loadChildren: async () => (await import('./main/main.module')).MainModule,
    ...canActivate(() => redirectUnauthorizedTo(['/landing']))
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
