import { Component, Input } from '@angular/core'
import { Recicladora } from 'src/app/main/interfaces/recicladora'

@Component({
  selector: 'app-card-recicladoras',
  templateUrl: './card-recicladoras.component.html',
  styleUrls: ['./card-recicladoras.component.scss']
})
export class CardRecicladorasComponent {
  @Input() recicladora!: Recicladora
}
