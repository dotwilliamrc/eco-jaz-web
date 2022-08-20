import { Component, Input } from '@angular/core'
import { CardOne } from '../interfaces/card-one'

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.scss']
})
export class CardOneComponent {
  @Input() material!: CardOne

  //public avif: string = this.material.imagen + '.avif'
  //public webp: string = this.material.imagen + '.webp'
  //public jpg: string = this.material.imagen + '.jpg'
}
