import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { OneComponent } from './components/one/one.component'
import { TwoComponent } from './components/two/two.component'
import { DatosGuard } from './guards/datos.guard'
import { SigninComponent } from './pages/signin/signin.component'

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
    children: [
      {
        path: '',
        redirectTo: 'one',
        pathMatch: 'full'
      },
      {
        path: 'one',
        component: OneComponent
      },
      {
        path: 'two',
        component: TwoComponent,
        canActivate: [DatosGuard]
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AppSigninModule { }
