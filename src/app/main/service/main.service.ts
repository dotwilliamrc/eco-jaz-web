import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from 'src/app/interfaces/user'
import { AuthService } from 'src/app/services/auth.service'
import { FirestoreService } from 'src/app/services/firestore.service'
import { Menu } from '../interfaces/menu'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor (
    private readonly authService: AuthService,
    private readonly firestoreService: FirestoreService
  ) { }

  private _men: Menu[] = [
    {
      name: 'Materiales',
      icono: 'liquor',
      route: 'materiales'
    },
    {
      name: 'Promociones',
      icono: 'local_activity',
      route: 'promociones'
    },
    {
      name: 'C\u00F3digo QR',
      icono: 'qr_code_2',
      route: 'qr'
    },
    {
      name: 'Recicladoras',
      icono: 'recycling',
      route: 'recicladoras'
    },
    {
      name: 'Tiendas',
      icono: 'store',
      route: 'tiendas'
    }
  ]

  private _extra: Menu[] = [
    {
      name: 'recicladora',
      icono: 'compost',
      route: 'reciclaje-signin',
      visible: true
    },
    {
      name: 'tienda',
      icono: 'add_business',
      route: 'tienda-signin',
      visible: true
    }
  ]

  public get extra (): Menu[] {
    return this._extra
  }

  public set extra (value: Menu[]) {
    this._extra = [...value]
  }

  public setExtra (): void {
    if (this.usuario.tipo === 1) {
      this._extra[0].visible = true
      this._extra[1].visible = true
    }
    if (this.usuario.tipo === 2) {
      this._extra[0].visible = true
      this._extra[1].visible = false
    }
    if (this.usuario.tipo === 3) {
      this._extra[0].visible = false
      this._extra[1].visible = true
    }
    if (this.usuario.tipo === 4) {
      this._extra[0].visible = false
      this._extra[1].visible = false
    }
  }

  private _active: string = 'Materiales'
  private _usuario!: User

  // ************-| Menu Actual |-************
  public get men (): Menu[] {
    return this._men
  }

  public set men (value: Menu[]) {
    this._men = [...value]
  }

  // ************-| Active |-************
  public get active (): string {
    return this._active
  }

  public set active (value: string) {
    this._active = value
  }

  // ************-| User |-************
  public get usuario (): User {
    return this._usuario
  }

  public set usuario (value: User) {
    this._usuario = value
  }

  public async getCurrentUser (): Promise<void> {
    const user: string = await this.authService.getCurrent() ?? ''
    this.usuario = await this.firestoreService.getObject('usuario', user) as User
    this.setExtra()
  }
}
