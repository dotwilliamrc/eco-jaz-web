import { Component, Input, OnInit } from '@angular/core'
import {Promocion} from 'src/app/interfaces/promocion'
import {MainService} from 'src/app/main/service/main.service'
import { FirestoreService } from 'src/app/services/firestore.service'
declare const window: any

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.scss']
})
export class ModalPostComponent implements OnInit {
  constructor (
    private readonly mainService: MainService,
    private readonly firestoreService: FirestoreService
  ) { }

  @Input() tituloVentana: string = 'Nuevo'
  @Input() nueva: boolean = true
  @Input() promocion: Promocion = {
    id: 'p' + Math.random().toString(16).slice(2),
    uid: this.mainService.usuario.id,
    titulo: '',
    tienda: this.mainService.tienda.nombre,
    descripcion: '',
    precio: 0
  }

  private modal!: any

  ngOnInit (): void {
    this.modal = new window.bootstrap.Modal(
      document.getElementById('staticBackdrop')
    )
  }

  public toggle (): void {
    this.modal.show()
  }

  public async validate (): Promise<void> {
    if (this.nueva) {
      await this.firestoreService.register(this.promocion, 'promocion', this.promocion.id)
    } else {
      await this.firestoreService.update(this.promocion, 'promocion', this.promocion.id)
    }
  }
}
