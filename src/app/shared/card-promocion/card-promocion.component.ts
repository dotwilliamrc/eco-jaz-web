import { Component, Input } from '@angular/core'
import { Promocion } from 'src/app/interfaces/promocion'

@Component({
  selector: 'app-card-promocion',
  templateUrl: './card-promocion.component.html',
  styleUrls: ['./card-promocion.component.scss']
})
export class CardPromocionComponent {
  @Input() promocion!: Promocion
}
