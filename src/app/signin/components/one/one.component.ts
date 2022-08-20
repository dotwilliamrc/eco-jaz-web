import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { SigninService } from '../../services/signin.service'

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent {
  constructor (
    private readonly router: Router,
    public readonly signinService: SigninService
  ) {
    this.barra = 0
    this.signinService.clearAll()
  }

  // ************-| barra |-************
  public get barra (): number {
    return this.signinService.barra
  }

  public set barra (value: number) {
    this.signinService.barra = value
  }

  // ************-| email |-************
  public get email (): string {
    return this.signinService.email
  }

  public set email (value: string) {
    this.signinService.email = value
  }

  // ************-| password |-************
  public get pass (): string {
    return this.signinService.pass
  }

  public set pass (value: string) {
    this.signinService.pass = value
  }

  // ************-| passRep |-************
  public get passRep (): string {
    return this.signinService.passRep
  }

  public set passRep (value: string) {
    this.signinService.passRep = value
  }

  public readon: boolean = false
  public check: boolean = false

  public emailValid: boolean = true
  public emailMessaje: string = ''

  public passValid: boolean = true
  public passMessaje: string = ''

  public passRepValid: boolean = true
  public passRepMessaje: string = ''

  public async validate (): Promise<void> {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const regex8letras = /^.{8,}$/g
    this.check = true
    // email
    if (this.email === '') {
      this.emailValid = false
      this.emailMessaje = 'Campo obligatorio'
    } else if (!regexEmail.test(this.email)) {
      this.emailMessaje = 'Correo invalido'
      this.emailValid = false
    } else {
      this.emailValid = true
      this.emailMessaje = 'Todo correcto'
    }
    // pass
    if (!regex8letras.test(this.pass)) {
      this.passValid = false
      this.passMessaje = 'La contraseña debe tener al menos 8 caracteres'
    } else if (!/[A-Z]+/gm.test(this.pass)) {
      this.passValid = false
      this.passMessaje = 'La contraseña debe tener al menos 1 mayúscula'
    } else if (!/[a-z]+/gm.test(this.pass)) {
      this.passValid = false
      this.passMessaje = 'La contraseña debe tener al menos 1 minúscula'
    } else if (!/[1-9]+/gm.test(this.pass)) {
      this.passValid = false
      this.passMessaje = 'La contraseña debe tener al menos 1 número'
    } else if (/\s+/gm.test(this.pass)) {
      this.passValid = false
      this.passMessaje = 'La contraseña no debe tener espacios en blanco'
    } else {
      this.passValid = true
      this.passMessaje = 'Todo correcto'
    }

    // passRep
    if (this.passRep !== this.pass || this.passRep === '') {
      this.passRepValid = false
      this.passRepMessaje = 'Las contraseñas no coinciden'
    } else {
      this.passRepValid = true
      this.passRepMessaje = 'Todo correcto'
    }

    if (this.emailValid && this.passValid && this.passRepValid) {
      this.readon = true
      await this.signinService.loading(50)
      await this.router.navigate(['/signin/two'])
    }
  }
}
