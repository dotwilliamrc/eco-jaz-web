import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NavbarComponent } from './navbar/navbar.component'
import { RouterModule } from '@angular/router'
import { FooterComponent } from './footer/footer.component'
import { ModalComponent } from './modal/modal.component'
import { CardOneComponent } from './card-one/card-one.component'

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    CardOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    CardOneComponent
  ]
})
export class SharedModule { }
