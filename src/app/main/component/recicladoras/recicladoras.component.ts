import { Component, OnInit } from '@angular/core'
import { FirestoreService } from 'src/app/services/firestore.service'
import { Recicladora } from '../../interfaces/recicladora'
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-recicladoras',
  templateUrl: './recicladoras.component.html',
  styleUrls: ['./recicladoras.component.scss']
})
export class RecicladorasComponent implements OnInit {
  constructor (
    private readonly mainSerivice: MainService,
    private readonly firestoreService: FirestoreService
  ) {
    mainSerivice.active = 'Recicladoras'
  }

  public recicladoras: Recicladora[] = []

  ngOnInit (): void {
    this.firestoreService.getObjectRealtime<Recicladora>('recicladora', 'id').subscribe(res => {
      this.recicladoras = res
      console.log(this.recicladoras)
    })
  }
}
