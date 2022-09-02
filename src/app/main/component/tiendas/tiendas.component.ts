import { Component, OnInit } from '@angular/core'
import { FirestoreService } from 'src/app/services/firestore.service'
import { MainService } from '../../service/main.service'
import { Tienda } from '../../interfaces/tienda'

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.scss']
})
export class TiendasComponent implements OnInit {
  constructor (
    private readonly mainSerivice: MainService,
    private readonly firestoreService: FirestoreService
  ) {
    mainSerivice.active = 'Tiendas'
  }

  public tiendas: Tienda[] = []

  ngOnInit (): void {
    this.firestoreService.getObjectRealtime<Tienda>('tienda', 'id').subscribe(res => {
      this.tiendas = res
    })
  }
}
