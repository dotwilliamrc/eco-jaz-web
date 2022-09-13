import { Component, OnInit, ViewChild } from '@angular/core'
import { Promocion } from 'src/app/interfaces/promocion'
import { User } from 'src/app/interfaces/user'
import { FirestoreService } from 'src/app/services/firestore.service'
import { BarcodeScanner } from '@capacitor-community/barcode-scanner'

@Component({
  selector: 'app-scan-tinenda',
  templateUrl: './scan-tinenda.component.html',
  styleUrls: ['./scan-tinenda.component.scss']
})
export class ScanTinendaComponent implements OnInit {
  constructor (
    private readonly firestoreService: FirestoreService
  ) { }

  public onScan: boolean = true
  public codigo: string = ''
  public codigoInvalid: boolean = false
  public total: number = 0

  public nombre: string = ''
  public opreacion: string = 'resta'
  public nip: number = 0

  public user!: User

  ngOnInit (): void {
    this.firestoreService.getObjectRealtime<Promocion>('promocion', 'id').subscribe(res => {
      this.promociones = res
    })
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

  public promociones: Promocion[] = []

  // ************-| toggleSelect |-************
  public toggleSelect (c: Promocion): void {
    c.isSelect = !(c.isSelect ?? false)
    this.total += c.isSelect ? c.precio : -c.precio
    console.log(this.total)
  }

  public async buscar (): Promise<void> {
    this.user = await this.firestoreService.getObjectOfUser('usuario', this.codigo, 'codigo') as User
    if (this.user === undefined) {
      this.codigoInvalid = true
      this.onScan = true
    } else {
      this.codigoInvalid = false
      this.onScan = false
      this.nip = Number(this.user.nip)
    }
  }

  @ViewChild('transaction') transaction!: any

  public showModal (): void {
    this.transaction.toggle()
  }
}
