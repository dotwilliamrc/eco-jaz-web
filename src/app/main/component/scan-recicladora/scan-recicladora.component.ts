import { Component, OnInit, ViewChild } from '@angular/core'
import { User } from 'src/app/interfaces/user'
import { FirestoreService } from 'src/app/services/firestore.service'
import { MainService } from '../../service/main.service'

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
