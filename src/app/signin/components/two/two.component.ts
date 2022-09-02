import { Component, ViewChild } from '@angular/core'
import { FirebaseError } from '@angular/fire/app'
import { UserCredential } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { User } from 'src/app/interfaces/user'
import { AuthService } from 'src/app/services/auth.service'
import { FirestoreService } from 'src/app/services/firestore.service'
import { SigninService } from '../../services/signin.service'

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})

export class TwoComponent {
  constructor (
    public readonly signinSerivce: SigninService,
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly firestoreService: FirestoreService
  ) { this.signinSerivce.clearData() }

  public readon: boolean = false
  public check: boolean = false
  public mensajeErr: string = ''

  public nombreMensaje: string = ''
  public apellidosMensaje: string = ''
  public nipMensaje: string = ''
  public nombreValid: boolean = true
  public apellidosValid: boolean = true
  public nipValid: boolean = true

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
    await this.router.navigate(['/signin'])
  }

  // ************-| barra |-************
  public get barra (): number {
    return this.signinSerivce.barra
  }

  public set barra (value: number) {
    this.signinSerivce.barra = value
  }

  // ************-| nombre |-************
  public get nombre (): string {
    return this.signinSerivce.nombre
  }

  public set nombre (value: string) {
    this.signinSerivce.nombre = value
  }

  // ************-| apellidos |-************
  public get apellidos (): string {
    return this.signinSerivce.apellidos
  }

  public set apellidos (value: string) {
    this.signinSerivce.apellidos = value
  }

  // ************-| nip |-************
  public get nip (): string {
    return this.signinSerivce.nip
  }

  public set nip (value: string) {
    this.signinSerivce.nip = value
  }

  public async validate (): Promise<void> {
    this.check = true
    // Nombre
    if (this.nombre.length === 0 || this.nombre.split(' ').length > 3) {
      this.nombreValid = false
      this.nombreMensaje = 'Solo puedes tener de 1 a 2 nombres'
    } else {
      this.nombreValid = true
      this.nombreMensaje = 'Todo correcto'
    }

    // apellidos
    if (this.apellidos.length === 0 || this.apellidos.split(' ').length > 2) {
      this.apellidosValid = false
      this.apellidosMensaje = 'Solo puedes tener de 1 a 2 apellidos'
    } else {
      this.apellidosValid = true
      this.apellidosMensaje = 'Todo correcto'
    }

    // nip
    const nipTester = /^\d{4}$/g
    if (!nipTester.test(this.nip)) {
      this.nipValid = false
      this.nipMensaje = 'El NIP debe tener 4 d\u00EDgitos num\u00E9ricos'
    } else {
      this.nipValid = true
      this.nipMensaje = 'Todo correcto'
    }

    if (this.nombreValid && this.apellidosValid && this.nipValid) {
      this.readon = true
      try {
        await this.signinSerivce.loading(100)
        const usr: UserCredential = await this.authService.register(this.signinSerivce.email,
          this.signinSerivce.pass)

        // ************-| setusr |-************

        const usuario: User = {
          id: usr.user.uid,
          codigo: Date.now().toString(),
          nombre: this.nombre,
          apellidos: this.apellidos,
          nip: this.nip,
          puntos: 0,
          tipo: 1
        }

        await this.firestoreService.register(usuario, 'usuario', usuario.id)

        // ************-| end setusr |-************
        await this.router.navigate(['/login'])
        this.signinSerivce.clearAll()
      } catch (err) {
        if (!(err instanceof FirebaseError)) {
          throw err
        }
        if (err.code === 'auth/network-request-failed') {
          this.signinSerivce.clearAll()
          this.titulo = 'Error'
          this.mensaje = 'Al parecer no tienes conexi\u00F3n a internet. ' +
            'Intenta de nuevo mas tard\u00E9'
          this.buttonOne = 'Inicio'
          this.buttonTwo = 'Aceptar'
          this.toggle()
        } else if (err.code === 'auth/email-already-in-use') {
          this.titulo = 'Error'
          this.mensaje = 'El correo electr\u00F3nico ingresado ya se encuentra en uso. ' +
            'Inicie sesi\u00F3n o intente con un correo electr\u00F3nico diferente'
          this.buttonOne = 'Inicio'
          this.buttonTwo = 'Aceptar'
          this.toggle()
        }
      }
    }
  }
}
