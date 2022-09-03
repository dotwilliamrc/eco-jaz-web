import { Component } from '@angular/core'
import { MainService } from '../../service/main.service'
import { RecicladoraService } from '../../service/recicladora.service'

@Component({
  selector: 'app-reciladora',
  templateUrl: './reciladora.component.html',
  styleUrls: ['./reciladora.component.scss']
})
export class ReciladoraComponent {
  constructor (
    private readonly recicladoraService: RecicladoraService,
    private readonly mainService: MainService
  ) {
    this.mainService.active = 'Recicladora'
    console.log(recicladoraService.reciladora)
  }
}
