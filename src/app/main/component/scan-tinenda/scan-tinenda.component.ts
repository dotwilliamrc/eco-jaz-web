import { Component, OnInit } from '@angular/core'
import { User } from '@angular/fire/auth'
import { Promocion } from 'src/app/interfaces/promocion'
import { FirestoreService } from 'src/app/services/firestore.service'

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
  public total: number = 0
  public user!: User

  ngOnInit (): void {
    this.firestoreService.getObjectRealtime<Promocion>('promocion', 'id').subscribe(res => {
      this.promociones = res
    })
  }

  public promociones: Promocion[] = []

  // ************-| toggleSelect |-************
  public toggleSelect (c: Promocion): void {
    c.isSelect = !(c.isSelect ?? false)
    this.total += c.isSelect ? c.precio : -c.precio
    console.log(this.total)
  }

  public async buscar (): Promise<void> {
    this.user = await this.firestoreService.getObject('usuario', this.codigo) as User
    console.log(this.user)
  }
}
