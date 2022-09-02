import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainComponent } from './pages/main/main.component'

import { MaterialesComponent } from './component/materiales/materiales.component'
import { PromocionesComponent } from './component/promociones/promociones.component'
import { QrcodeComponent } from './component/qrcode/qrcode.component'
import { RecicladorasComponent } from './component/recicladoras/recicladoras.component'
import { TiendasComponent } from './component/tiendas/tiendas.component'
import { SigninRecicladoraComponent } from './component/signin-recicladora/signin-recicladora.component'
import { SigninTiendaComponent } from './component/signin-tienda/signin-tienda.component'

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'materiales',
        pathMatch: 'full'
      },
      {
        path: 'promociones',
        component: PromocionesComponent
      },
      {
        path: 'qr',
        component: QrcodeComponent
      },
      {
        path: 'recicladoras',
        component: RecicladorasComponent
      },
      {
        path: 'tiendas',
        component: TiendasComponent
      },
      {
        path: 'materiales',
        component: MaterialesComponent
      },
      {
        path: 'reciclaje-signin',
        component: SigninRecicladoraComponent
      },
      {
        path: 'tienda-signin',
        component: SigninTiendaComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AppMainModule { }
