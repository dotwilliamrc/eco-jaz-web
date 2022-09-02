import { Component, ViewChild } from '@angular/core'
import {FirebaseError} from '@angular/fire/app'
import {Router} from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor (
    public readonly loginService: LoginService,
    public readonly auth: AuthService,
    public readonly router: Router
  ) {
    this.email = ''
    this.password = ''
    this.validarMail = false
    this.validMail = false
    this.validarPass = false
    this.validPass = false
  }

  public validarMail: boolean = false
  public validarPass: boolean = false
  public validMail: boolean = true
  public validPass: boolean = true
  public readon: boolean = false

  // ************-| Modal |-************

  public titulo: string = ''
  public mensaje: string = ''
  public buttonOne: string = ''
  public buttonTwo: string = ''
  @ViewChild('msg') msg!: any

  public toggle (): void {
    this.msg.toggle()
  }

  public async funcOne (): Promise<void> {
    await this.router.navigate(['/'])
  }

  public async funcTwo (): Promise<void> {
    await this.router.navigate(['/login'])
  }

  // ************-| Email |-************

  public get email (): string {
    return this.loginService.email
  }

  public set email (value: string) {
    this.loginService.email = value
  }

  // ************-| Password |-************

  public get password (): string {
    return this.loginService.password
  }

  public set password (value: string) {
    this.loginService.password = value
  }

  // ************-| ayudas |-************

  public menEmail: string = ''
  public menPass: string = ''

  // ************-| validacion |-************
  public async helper (err: string): Promise<void> {
    if (err === 'auth/user-not-found') {
      this.readon = false
      this.validarMail = true
      this.validarPass = false
      this.validMail = false
      this.menEmail = 'Usuario no encontrado'
    } else if (err === 'auth/wrong-password') {
      this.readon = false
      this.validarMail = true
      this.validarPass = true
      this.validMail = true
      this.validPass = false
      this.menPass = 'Contrase\u00F1a incorrecta'
    } else if (err === 'auth/network-request-failed') {
      this.readon = false
      this.titulo = 'Error'
      this.mensaje = 'Al parecer no tienes conexi\u00F3n a internet. ' +
            'Intenta de nuevo mas tard\u00E9'
      this.buttonOne = 'Inicio'
      this.buttonTwo = 'Aceptar'
      this.toggle()
    } else {
      this.validarMail = true
      this.validarPass = true
      this.validMail = true
      this.validPass = true
      await this.router.navigate(['/'])
    }
  }

  public async validate (): Promise<void> {
    this.readon = true
    try {
      await this.auth.login(this.email, this.password)
      await this.router.navigate(['/'])
    } catch (err) {
      if (!(err instanceof FirebaseError)) {
        throw err
      }
      void this.helper(err.code)
    }
    /*
    // ************-| Modal |-************
    this.titulo = 'Login'
    this.mensaje = 'Mensaje'
    this.buttonOne = 'boton 1'
    this.buttonTwo = 'boton 2'
    this.toggle()
    */
  }
}
