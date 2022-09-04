import { AfterViewInit, Component, Input } from '@angular/core'
import { User } from 'src/app/interfaces/user'
declare const window: any

@Component({
  selector: 'app-modal-trasacion',
  templateUrl: './modal-trasacion.component.html',
  styleUrls: ['./modal-trasacion.component.scss']
})
export class ModalTrasacionComponent implements AfterViewInit {
  @Input() titulo!: string
  @Input() placeholder!: string
  @Input() usuario!: User
  @Input() total!: number
  @Input() nip!: number
  public nipinvalid: boolean = true
  private modal!: any

  ngAfterViewInit (): void {
    this.modal = new window.bootstrap.Modal(
      document.getElementById('modal-trasaction')
    )
  }

  public toggle (): void {
    this.modal.show()
  }

  public trasacion (): void {
  }
}
