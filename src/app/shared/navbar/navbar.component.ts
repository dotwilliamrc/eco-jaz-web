import { Component } from '@angular/core'
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor (
    private readonly router: Router
  ) { }

  public async goSignin (): Promise<void> {
    await this.router.navigate(['/signin'])
  }

  public async goLogin (): Promise<void> {
    await this.router.navigate(['/login'])
  }
}
