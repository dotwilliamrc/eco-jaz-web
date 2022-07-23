import { Component, Input } from '@angular/core'
import { Info } from '../../interfaces/info'

@Component({
  selector: 'app-info-landing',
  templateUrl: './info-landing.component.html',
  styleUrls: ['./info-landing.component.scss']
})
export class InfoLandingComponent {
  @Input() articulo!: Info
}
