import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FirestoreService } from 'src/app/services/firestore.service'
import { Tienda } from '../../interfaces/tienda'
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-signin-tienda',
  templateUrl: './signin-tienda.component.html',
  styleUrls: ['./signin-tienda.component.scss']
})
export class SigninTiendaComponent {
  constructor (
    private readonly mainService: MainService,
    private readonly firestoreService: FirestoreService,
    private readonly router: Router
  ) {
    mainService.active = 'Ser tienda'
  }

  public tienda: Tienda = {
    nombre: '',
    direccon: '',
    id: ''
  }

  // ************-| Validate |-************
  public async validate (): Promise<void> {
    this.tienda.id = this.mainService.usuario.id
    console.log(this.tienda)
    try {
      await this.firestoreService.register(this.tienda, 'tienda', this.mainService.usuario.id)
      const tipo = { tipo: 1 }
      if (this.mainService.usuario.tipo === 1) {
        tipo.tipo = 2
        await this.firestoreService.update(tipo, 'usuario', this.mainService.usuario.id)
      } else if (this.mainService.usuario.tipo === 3) {
        tipo.tipo = 4
        await this.firestoreService.update(tipo, 'usuario', this.mainService.usuario.id)
      }
      await this.mainService.getCurrentUser()
      await this.router.navigate(['/main'])
    } catch (err) {
      console.log(err)
    }
  }
}
