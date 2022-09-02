import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { User } from 'src/app/interfaces/user'
import { AuthService } from 'src/app/services/auth.service'
import { FirestoreService } from 'src/app/services/firestore.service'
import { ngclass } from '../../interfaces/main'
import { Menu } from '../../interfaces/menu'
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor (
    private readonly auth: AuthService,
    public readonly router: Router,
    public readonly mainSerivice: MainService,
    private readonly firestoreService: FirestoreService
  ) {
    void mainSerivice.getCurrentUser()
  }

  // ************-| CurrentUser |-************
  public get CurrentUser (): User {
    return this.mainSerivice.usuario
  }

  public set CurrentUser (value: User) {
    this.mainSerivice.usuario = value
  }

  // ************-| Actual |-************
  public get active (): string {
    return this.mainSerivice.active
  }

  public set active (value: string) {
    this.mainSerivice.active = value
  }

  // ************-| men |-************
  public get men (): Menu[] {
    return this.mainSerivice.men
  }

  public set men (value: Menu[]) {
    this.mainSerivice.men = value
  }

  // ************-| toggle |-************
  public toggled: ngclass = {
    class: 'toggled',
    state: false
  }

  public toggle (): void {
    this.toggled.state = !this.toggled.state
  }

  // ************-| logout |-************
  public async logout (): Promise<void> {
    try {
      await this.auth.logout()
      await this.router.navigate(['/landing'])
    } catch (err) {
      console.log(err)
    }
  }
}
