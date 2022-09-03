import { Component, OnInit } from '@angular/core'
import { FirestoreService } from 'src/app/services/firestore.service'
import { MainService } from '../../service/main.service'
import { Tienda } from '../../interfaces/tienda'
import { Router } from '@angular/router'
import { TiendaService } from '../../service/tienda.service'

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.scss']
})
export class TiendasComponent implements OnInit {
  constructor (
    private readonly mainSerivice: MainService,
    private readonly firestoreService: FirestoreService,
    private readonly tiendaService: TiendaService,
    private readonly router: Router
  ) {
    mainSerivice.active = 'Tiendas'
  }

  public tiendas: Tienda[] = []

  ngOnInit (): void {
    this.firestoreService.getObjectRealtime<Tienda>('tienda', 'id').subscribe(res => {
      this.tiendas = res
    })
  }

  public async goTienda (tienda: Tienda): Promise<void> {
    this.tiendaService.tienda = tienda
    await this.router.navigate(['main/tienda'])
  }
}
