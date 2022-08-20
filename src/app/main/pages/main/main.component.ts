import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { ngclass } from '../../interfaces/main'
import { Menu } from '../../interfaces/menu'
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor (
    private readonly auth: AuthService,
    public readonly router: Router,
    private readonly mainSerivice: MainService
  ) { }

  ngOnInit (): void {
  }

  // ************-| men |-************
  public get men (): Menu[] {
    return this.mainSerivice.men
  }

  public set men (value: Menu[]) {
    this.mainSerivice.men = value
  }

  // ************-| active |-************
  public getActive (): string {
    this.active = this.active === 'active tex-dark' ? 'bg-transparent' : 'active text-dark'
    return this.active
  }

  public get active (): string {
    return this.mainSerivice.active
  }

  public set active (value: string) {
    this.mainSerivice.active = value
  }

  // ************-| toggle |-************
  public toggled: ngclass = {
    class: 'toggled',
    state: true
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
