import { Component, Input, OnInit } from '@angular/core'
import {Router} from '@angular/router'
declare const window: any

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor (
    private readonly router: Router
  ) { }

  @Input() titulo: string = ''
  @Input() mensaje: string = ''
  @Input() buttonOne: string = ''
  @Input() buttonTwo: string = ''
  @Input() funcOne!: () => Promise<void>
  @Input() funcTwo!: () => Promise<void>
  private modal!: any

  ngOnInit (): void {
    this.modal = new window.bootstrap.Modal(
      document.getElementById('staticBackdrop')
    )
  }

  public toggle (): void {
    this.modal.show()
  }
}
