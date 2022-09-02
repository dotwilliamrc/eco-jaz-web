import { Component } from '@angular/core'
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss']
})
export class PromocionesComponent {
  constructor (
    private readonly mainSerivice: MainService
  ) {
    mainSerivice.active = 'Promociones'
  }
}
