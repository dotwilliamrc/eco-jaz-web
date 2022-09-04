import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Material } from '../interfaces/material'

@Component({
  selector: 'app-card-scan',
  templateUrl: './card-scan.component.html',
  styleUrls: ['./card-scan.component.scss']
})
export class CardScanComponent implements OnInit {
  @Input() material!: Material
  @Output('sumar') sumar: EventEmitter<any> = new EventEmitter()

  ngOnInit (): void {
    this.material.kg = 0
    this.material.total = 0
  }

  public carcularCosto (): void {
    this.material.total = (this.material.kg ?? 0) * this.material.costo
    console.log(this.material.total)
    this.sumar.emit()
  }
}
