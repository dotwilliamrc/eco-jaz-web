import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainComponent } from './pages/main/main.component'
import { AppMainModule } from './app-main.module'
import { RouterModule } from '@angular/router'
import { MaterialesComponent } from './component/materiales/materiales.component'
import { PromocionesComponent } from './component/promociones/promociones.component'
import { QrcodeComponent } from './component/qrcode/qrcode.component'
import { RecicladorasComponent } from './component/recicladoras/recicladoras.component'
import { TiendasComponent } from './component/tiendas/tiendas.component'
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [
    MainComponent,
    MaterialesComponent,
    PromocionesComponent,
    QrcodeComponent,
    RecicladorasComponent,
    TiendasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMainModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
