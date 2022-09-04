import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FirestoreService } from 'src/app/services/firestore.service'
import { StorageService } from 'src/app/services/storage.service'
import { CardOne } from 'src/app/shared/interfaces/card-one'
import { Recicladora } from '../../interfaces/recicladora'
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-signin-recicladora',
  templateUrl: './signin-recicladora.component.html',
  styleUrls: ['./signin-recicladora.component.scss']
})
export class SigninRecicladoraComponent {
  constructor (
    private readonly mainService: MainService,
    private readonly firestoreService: FirestoreService,
    private readonly starageService: StorageService,
    private readonly router: Router
  ) {
    mainService.active = 'Ser recicladora'
  }

  public recicladora: Recicladora = {
    nombre: '',
    direccon: '',
    id: '',
    materiales: []
  }

  public materiales: CardOne[] = [
    {
      material: {
        imagen: '../../../assets/imagenes/materiales/no-pet.jpg',
        nombre: 'Pl\u00E1stico: no PET',
        costoXunidad: '5.00 puntos por kg',
        costo: 5
      },
      selected: false
    },
    {
      material: {
        imagen: '../../../assets/imagenes/materiales/plastico.jpg',
        nombre: 'Pl\u00E1stico: PET',
        costoXunidad: '4.50 puntos por kg',
        costo: 4.5
      },
      selected: false
    },
    {
      material: {
        imagen: '../../../assets/imagenes/materiales/carton.jpg',
        nombre: 'Cart\u00F3n',
        costoXunidad: '1.40 puntos por kg',
        costo: 1.4
      },
      selected: false
    },
    {
      material: {
        imagen: '../../../assets/imagenes/materiales/vidrio.jpg',
        nombre: 'Vidrio',
        costoXunidad: '0.85 puntos por kg',
        costo: 0.85
      },
      selected: false
    },
    {
      material: {
        imagen: '../../../assets/imagenes/materiales/metal.jpg',
        nombre: 'Metal',
        costoXunidad: '0.85 puntos por kg',
        costo: 0.85
      },
      selected: false
    }
  ]

  public uid (): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  // ************-| toggleSelect |-************
  public toggleSelect (c: CardOne): void {
    c.selected = !(c.selected ?? false)
  }

  public uploadRecicladora($event: any) {

  }

  // ************-| Validate |-************
  public async validate (): Promise<void> {
    this.recicladora.id = this.mainService.usuario.id
    this.materiales.forEach(v => {
      this.recicladora.materiales.push(v.material)
    })
    try {
      await this.firestoreService.register(this.recicladora, 'recicladora', this.mainService.usuario.id)
      const tipo = { tipo: 1 }
      if (this.mainService.usuario.tipo === 1) {
        tipo.tipo = 3
        await this.firestoreService.update(tipo, 'usuario', this.mainService.usuario.id)
      } else if (this.mainService.usuario.tipo === 2) {
        tipo.tipo = 4
        await this.firestoreService.update(tipo, 'usuario', this.mainService.usuario.id)
      }
      this.mainService.setExtra()
      await this.router.navigate(['/main'])
    } catch (err) {
      console.log(err)
    }
  }
}
