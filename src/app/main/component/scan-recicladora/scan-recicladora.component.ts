import { Component, OnInit, ViewChild } from '@angular/core'
import { User } from 'src/app/interfaces/user'
import { FirestoreService } from 'src/app/services/firestore.service'
import { MainService } from '../../service/main.service'
import { BarcodeScanner } from '@capacitor-community/barcode-scanner'

@Component({
  selector: 'app-scan-recicladora',
  templateUrl: './scan-recicladora.component.html',
  styleUrls: ['./scan-recicladora.component.scss']
})
export class ScanRecicladoraComponent implements OnInit {
  constructor (
    private readonly firestoreService: FirestoreService,
    public readonly mainService: MainService
  ) { }

  public onScan: boolean = true
  public codigo: string = ''
  public codigoInvalid: boolean = false
  public total: number = 0
  public nip: number = Number(this.mainService.usuario.nip)

  public user!: User

  ngOnInit (): void {
    void this.startScan()
  }

  public async startScan (): Promise<void> {
    document.body.style.opacity = '0'
    document.body.style.background = 'transparent'
    await BarcodeScanner.hideBackground() // make background of WebView transparent

    const result = await BarcodeScanner.startScan() // start scanning and wait for a result

    // if the result has content
    try {
      if (result.hasContent) {
        document.body.style.opacity = '1'
        document.body.style.background = ''

        this.codigo = result.content ?? ''
      }
    } catch {
      this.codigo = 'error'
    }
  }

  public async buscar (): Promise<void> {
    this.user = await this.firestoreService.getObjectOfUser('usuario', this.codigo, 'codigo') as User
    if (this.user === undefined) {
      this.codigoInvalid = true
      this.onScan = true
    } else {
      this.codigoInvalid = false
      this.onScan = false
    }
  }

  public sumar (): void {
    this.total = 0
    this.mainService.recicladora.materiales.forEach(v => {
      this.total += v.total ?? 0
    })
  }

  @ViewChild('transaction') transaction!: any

  public showModal (): void {
    this.transaction.toggle()
  }
}
