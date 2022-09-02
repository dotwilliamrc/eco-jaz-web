import { Component, Input } from '@angular/core'
import { CardOne } from '../interfaces/card-one'

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.scss']
})
export class CardTwoComponent {
  @Input() material!: CardOne
}
