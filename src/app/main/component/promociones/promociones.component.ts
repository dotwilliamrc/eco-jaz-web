import { Component, OnInit } from '@angular/core'
import { Promocion } from 'src/app/interfaces/promocion'
import { FirestoreService } from 'src/app/services/firestore.service'
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss']
})
export class PromocionesComponent implements OnInit {
  constructor (
    private readonly mainSerivice: MainService,
    private readonly firestoreService: FirestoreService
  ) {
    mainSerivice.active = 'Promociones'
  }

  ngOnInit (): void {
    this.firestoreService.getObjectRealtime<Promocion>('promocion', 'id').subscribe(res => {
      this.promociones = res
    })
  }

  public promociones: Promocion[] = []
}
