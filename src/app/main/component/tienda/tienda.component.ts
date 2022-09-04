import { Component, OnInit } from '@angular/core'
import { Promocion } from 'src/app/interfaces/promocion'
import { FirestoreService } from 'src/app/services/firestore.service'
import { MainService } from '../../service/main.service'
import { TiendaService } from '../../service/tienda.service'

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
  constructor (
    public readonly tiendaService: TiendaService,
    private readonly mainService: MainService,
    private readonly firestoreService: FirestoreService
  ) {
    this.mainService.active = 'Tienda'
    console.log(tiendaService.tienda)
  }

  ngOnInit (): void {
    this.firestoreService.getObjectOfUserRealtime<Promocion>('promocion', this.tiendaService.tienda.id, 'uid').subscribe(res => {
      this.promociones = res
    })
  }

  public promociones: Promocion[] = []
}
