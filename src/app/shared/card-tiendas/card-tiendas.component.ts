import { Component, Input } from '@angular/core'
import { Tienda } from 'src/app/main/interfaces/tienda'

@Component({
  selector: 'app-card-tiendas',
  templateUrl: './card-tiendas.component.html',
  styleUrls: ['./card-tiendas.component.scss']
})
export class CardTiendasComponent {
  @Input() tienda!: Tienda
}
