import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  constructor (
    private readonly router: Router
  ) { }

  private _barra: number = 0
  private _email: string = ''
  private _password: string = ''
  private _passRep: string = ''
  private _nombre: string = ''
  private _apellidos: string = ''
  private _nacimiento: string = ''

  // ************-| barra |-************
  public get barra (): number {
    return this._barra
  }

  public set barra (value: number) {
    this._barra = value
  }

  // ************-| email |-************
  public get email (): string {
    return this._email
  }

  public set email (value: string) {
    this._email = value
  }

  // ************-| password |-************
  public get pass (): string {
    return this._password
  }

  public set pass (value: string) {
    this._password = value
  }

  // ************-| passRep |-************
  public get passRep (): string {
    return this._passRep
  }

  public set passRep (value: string) {
    this._passRep = value
  }

  // ************-| nombre |-************
  public get nombre (): string {
    return this._nombre
  }

  public set nombre (value: string) {
    this._nombre = value
  }

  // ************-| apellidos |-************
  public get apellidos (): string {
    return this._apellidos
  }

  public set apellidos (value: string) {
    this._apellidos = value
  }

  // ************-| nacimiento |-************
  public get nacimiento (): string {
    return this._nacimiento
  }

  public set nacimiento (value: string) {
    this._nacimiento = value
  }

  // ************-| Metodo loading |-************
  public async loading (end: number): Promise<void> {
    const delay = async (): Promise<void> => {
      return await new Promise<void>((resolve: () => void) => {
        setTimeout(resolve, 20)
      })
    }

    while (this.barra <= end) {
      await delay()
      this.barra = this.barra + 1
    }
  }

  // ************-| Metodo Validar |-************
  public ValidateUserAndPass (): boolean {
    const regexPasword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[@$!%*?&]*[A-Za-z\d@$!%*?&]{8,}$/g
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (regexPasword.test(this.pass) &&
        regexEmail.test(this.email) &&
        this.pass === this.passRep) {
      return true
    } else {
      return false
    }
  }

  // ************-| ToLanding |-************
  public ToLanding (): void {
    void this.router.navigate(['/'])
  }

  // ************-| ToLogin |-************
  public ToLogin (): void {
    void this.router.navigate(['/login'])
  }

  public clearAll (): void {
    this.email = ''
    this.pass = ''
    this.passRep = ''
    this.clearData()
  }

  public clearData (): void {
    this.nombre = ''
    this.apellidos = ''
    this.nacimiento = ''
  }
}
