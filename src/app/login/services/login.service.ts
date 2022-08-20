import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor (
    private readonly router: Router
  ) { }

  private _email: string = ''
  private _password: string = ''

  // ************-| Email |-************
  public get email (): string {
    return this._email
  }

  public set email (value: string) {
    this._email = value
  }

  // ************-| Password |-************

  public get password (): string {
    return this._password
  }

  public set password (value: string) {
    this._password = value
  }

  // ************-| ToLanding |-************
  public ToLanding (): void {
    void this.router.navigate(['/'])
  }

  // ************-| ToSignin |-************
  public ToSignin (): void {
    void this.router.navigate(['/signin'])
  }
}
