import { Injectable } from '@angular/core'
import { Tienda } from '../interfaces/tienda'

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private _tienda!: Tienda

  // ************-| Tienda |-************
  public get tienda (): Tienda {
    return this._tienda
  }

  public set tienda (value: Tienda) {
    this._tienda = value
  }
}
