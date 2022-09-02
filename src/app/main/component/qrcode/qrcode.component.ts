import { Component } from '@angular/core'
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent {
  constructor (
    private readonly mainSerivice: MainService
  ) {
    mainSerivice.active = 'C\u00F3digo QR'
  }
}
