import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-card-store',
  templateUrl: './card-store.component.html',
  styleUrls: ['./card-store.component.scss']
})
export class CardStoreComponent {
  @Input() imagen: string = '../../../assets/imagenes/materiales/carton.jpg'
  @Input() titulo!: string
  @Input() direccion!: string
}
