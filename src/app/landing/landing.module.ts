import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LandingPageComponent } from './pages/landing-page/landing-page.component'

import { SharedModule } from '../shared/shared.module'
import { HeroComponent } from './component/hero/hero.component';
import { InfoLandingComponent } from './component/info-landing/info-landing.component'

@NgModule({
  declarations: [
    LandingPageComponent,
    HeroComponent,
    InfoLandingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingModule { }
