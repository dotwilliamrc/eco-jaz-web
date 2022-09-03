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
import { SharedModule } from '../shared/shared.module'
import { SigninTiendaComponent } from './component/signin-tienda/signin-tienda.component'
import { SigninRecicladoraComponent } from './component/signin-recicladora/signin-recicladora.component'
import { FormsModule } from '@angular/forms'
import { QRCodeModule } from 'angularx-qrcode'
import { PostsComponent } from './component/posts/posts.component'
import { ScanTinendaComponent } from './component/scan-tinenda/scan-tinenda.component'
import { ScanRecicladoraComponent } from './component/scan-recicladora/scan-recicladora.component'
import { TiendaComponent } from './component/tienda/tienda.component'
import { ReciladoraComponent } from './component/reciladora/reciladora.component'

@NgModule({
  declarations: [
    MainComponent,
    MaterialesComponent,
    PromocionesComponent,
    QrcodeComponent,
    RecicladorasComponent,
    TiendasComponent,
    SigninTiendaComponent,
    SigninRecicladoraComponent,
    PostsComponent,
    ScanTinendaComponent,
    ScanRecicladoraComponent,
    TiendaComponent,
    ReciladoraComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMainModule,
    SharedModule,
    FormsModule,
    QRCodeModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
