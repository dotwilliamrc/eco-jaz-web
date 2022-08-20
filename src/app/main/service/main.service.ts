import { Injectable } from '@angular/core'
import { Menu } from '../interfaces/menu'

@Injectable({
  providedIn: 'root'
})
export class MainService {
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
      name: 'Codigo QR',
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

  private _active: string = 'materiales'

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
}
