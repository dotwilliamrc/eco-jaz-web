import { AfterViewInit, Component, Input } from '@angular/core'
import {Router} from '@angular/router'
import { User } from 'src/app/interfaces/user'
import { FirestoreService } from 'src/app/services/firestore.service'
declare const window: any

@Component({
  selector: 'app-modal-trasacion',
  templateUrl: './modal-trasacion.component.html',
  styleUrls: ['./modal-trasacion.component.scss']
})
export class ModalTrasacionComponent implements AfterViewInit {
  constructor (
    private readonly firestoreService: FirestoreService,
    private readonly router: Router
  ) {}

  @Input() nombre!: string
  @Input() usuario!: User
  @Input() total!: number
  @Input() opreacion: string = 'suma'

  public mensaje: string = ''

  @Input() nip!: number
  public nipWindow: number = 0
  public nipinvalid: boolean = false
  private modal!: any

  ngAfterViewInit (): void {
    this.modal = new window.bootstrap.Modal(
      document.getElementById('modal-trasaction')
    )
    this.nipWindow = 0
  }

  public toggle (): void {
    this.modal.show()
    if (this.opreacion === 'resta' && (this.usuario.puntos - this.total) < 0) {
      this.mensaje = 'No tienes suficientes puntos'
      this.nipinvalid = true
    } else {
      this.nipinvalid = false
    }
  }

  public hide (): void {
    this.modal.hide()
  }

  public async trasacion (): Promise<void> {
    if (this.opreacion === 'resta' && (this.usuario.puntos - this.total) < 0) {
      this.mensaje = 'No tienes suficientes puntos'
      this.nipinvalid = true
    } else if (this.nip !== this.nipWindow) {
      this.mensaje = 'NIP incorrecto'
      this.nipinvalid = true
      console.log(this.nip, this.nipWindow)
    } else if (this.opreacion === 'resta') {
      this.usuario.puntos -= this.total
      await this.firestoreService.update(this.usuario, 'usuario', this.usuario.id)
      await this.router.navigate(['/main/materiales'])
      this.hide()
    } else {
      this.usuario.puntos += this.total
      await this.firestoreService.update(this.usuario, 'usuario', this.usuario.id)
      await this.router.navigate(['/main/materiales'])
      this.hide()
    }
  }
}
