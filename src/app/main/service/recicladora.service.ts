import { Injectable } from '@angular/core'
import { Recicladora } from '../interfaces/recicladora'

@Injectable({
  providedIn: 'root'
})
export class RecicladoraService {
  private _reciladora!: Recicladora

  // ************-| Tienda |-************
  public get reciladora (): Recicladora {
    return this._reciladora
  }

  public set reciladora (value: Recicladora) {
    this._reciladora = value
  }
}
