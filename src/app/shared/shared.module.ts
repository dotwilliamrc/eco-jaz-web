import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NavbarComponent } from './navbar/navbar.component'
import { RouterModule } from '@angular/router'
import { FooterComponent } from './footer/footer.component'
import { ModalComponent } from './modal/modal.component'
import { CardOneComponent } from './card-one/card-one.component'
import { CardTwoComponent } from './card-two/card-two.component'
import { CardRecicladorasComponent } from './card-recicladoras/card-recicladoras.component'
import { CardTiendasComponent } from './card-tiendas/card-tiendas.component'
import { ModalPostComponent } from './modal-post/modal-post.component'
import {FormsModule} from '@angular/forms';
import { CardPostComponent } from './card-post/card-post.component'

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    CardOneComponent,
    CardTwoComponent,
    CardRecicladorasComponent,
    CardTiendasComponent,
    ModalPostComponent,
    CardPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    CardOneComponent,
    CardTwoComponent,
    CardRecicladorasComponent,
    CardTiendasComponent,
    ModalPostComponent,
    CardPostComponent
  ]
})
export class SharedModule { }
