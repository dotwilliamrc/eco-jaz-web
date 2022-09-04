import { Component, OnInit } from '@angular/core'
import { CardOne } from 'src/app/shared/interfaces/card-one'
import { MainService } from '../../service/main.service'
import { RecicladoraService } from '../../service/recicladora.service'

@Component({
  selector: 'app-reciladora',
  templateUrl: './reciladora.component.html',
  styleUrls: ['./reciladora.component.scss']
})
export class ReciladoraComponent implements OnInit {
  constructor (
    public readonly recicladoraService: RecicladoraService,
    private readonly mainService: MainService
  ) {
    this.mainService.active = 'Recicladora'
    console.log(recicladoraService.reciladora)
  }

  ngOnInit (): void {
    this.recicladoraService.reciladora.materiales.forEach(v => {
      this.materiales.push({ material: v })
    })
  }

  public materiales: CardOne[] = []
}
