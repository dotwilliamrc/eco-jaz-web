import { Injectable } from '@angular/core'
import { User } from 'src/app/interfaces/user'
import { AuthService } from 'src/app/services/auth.service'
import { FirestoreService } from 'src/app/services/firestore.service'
import { Menu } from '../interfaces/menu'
import { Recicladora } from '../interfaces/recicladora'
import { Tienda } from '../interfaces/tienda'

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
      visible: false
    },
    {
      name: 'tienda',
      icono: 'add_business',
      route: 'tienda-signin',
      visible: false
    }
  ]

  private _recicladoraMenu: Menu[] = [
    {
      name: 'escanear',
      icono: 'qr_code_scanner',
      route: 'reciclaje-scanner',
      visible: false
    }
  ]

  private _tiendaMenu: Menu[] = [
    {
      name: 'escanear',
      icono: 'qr_code_scanner',
      route: 'tienda-scanner',
      visible: false
    },
    {
      name: 'ofertas',
      icono: 'confirmation_number',
      route: 'tienda-ofertas',
      visible: false
    }
  ]

  // ************-| extra |-************
  public get extra (): Menu[] {
    return this._extra
  }

  public set extra (value: Menu[]) {
    this._extra = [...value]
  }

  // ************-| recicladora |-************
  public get recicladoraMenu (): Menu[] {
    return this._recicladoraMenu
  }

  public set recicladoraMenu (value: Menu[]) {
    this._recicladoraMenu = value
  }

  // ************-| Tienda |-************
  public get tiendaMenu (): Menu[] {
    return this._tiendaMenu
  }

  public set tiendaMenu (value: Menu[]) {
    this._tiendaMenu = value
  }

  public setExtra (): void {
    if (this.usuario.tipo === 1) {
      this._extra[0].visible = true
      this._extra[1].visible = true
      this._recicladoraMenu[0].visible = false
      this._tiendaMenu[0].visible = false
      this._tiendaMenu[1].visible = false
    }
    if (this.usuario.tipo === 2) {
      this._extra[0].visible = true
      this._extra[1].visible = false
      this._recicladoraMenu[0].visible = false
      this._tiendaMenu[0].visible = true
      this._tiendaMenu[1].visible = true
    }
    if (this.usuario.tipo === 3) {
      this._extra[0].visible = false
      this._extra[1].visible = true
      this._recicladoraMenu[0].visible = true
      this._tiendaMenu[0].visible = false
      this._tiendaMenu[1].visible = false
    }
    if (this.usuario.tipo === 4) {
      this._extra[0].visible = false
      this._extra[1].visible = false
      this._recicladoraMenu[0].visible = true
      this._tiendaMenu[0].visible = true
      this._tiendaMenu[1].visible = true
    }
  }

  private _active: string = 'Materiales'
  private _usuario!: User
  private _tienda!: Tienda
  private _recicladora!: Recicladora

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

  // ************-| Tienda |-************
  public get tienda (): Tienda {
    return this._tienda
  }

  public set tienda (value: Tienda) {
    this._tienda = value
  }

  // ************-| Recicladora |-************
  public get recicladora (): Recicladora {
    return this._recicladora
  }

  public set recicladora (value: Recicladora) {
    this._recicladora = value
  }

  public async getCurrentUser (): Promise<void> {
    const user: string = await this.authService.getCurrent() ?? ''
    this.usuario = await this.firestoreService.getObject('usuario', user) as User
    this.firestoreService.getDocRealtime<User>('usuario', this.usuario.id).subscribe(res => {
      this.usuario = res
    })
    this.setExtra()
    if (this.usuario.tipo === 2 || this.usuario.tipo === 4) {
      void this.getCurrentTienda()
    }

    if (this.usuario.tipo === 3 || this.usuario.tipo === 4) {
      void this.getCurrentRecicladora()
    }
  }

  public async getCurrentRecicladora (): Promise<void> {
    this.firestoreService.getDocRealtime<Recicladora>('recicladora', this.usuario.id).subscribe(res => {
      this.recicladora = res
    })
  }

  public async getCurrentTienda (): Promise<void> {
    this.firestoreService.getDocRealtime<Tienda>('tienda', this.usuario.id).subscribe(res => {
      this.tienda = res
    })
  }
}
