import { Component } from '@angular/core'
import { MainService } from '../../service/main.service'
import { TiendaService } from '../../service/tienda.service'

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent {
  constructor (
    private readonly tiendaService: TiendaService,
    private readonly mainService: MainService
  ) {
    this.mainService.active = 'Tienda'
    console.log(tiendaService.tienda)
  }
}
