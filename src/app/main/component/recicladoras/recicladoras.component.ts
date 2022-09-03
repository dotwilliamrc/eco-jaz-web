import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FirestoreService } from 'src/app/services/firestore.service'
import { Recicladora } from '../../interfaces/recicladora'
import { MainService } from '../../service/main.service'
import { RecicladoraService } from '../../service/recicladora.service'

@Component({
  selector: 'app-recicladoras',
  templateUrl: './recicladoras.component.html',
  styleUrls: ['./recicladoras.component.scss']
})
export class RecicladorasComponent implements OnInit {
  constructor (
    private readonly mainSerivice: MainService,
    private readonly firestoreService: FirestoreService,
    private readonly recicladoraService: RecicladoraService,
    private readonly router: Router
  ) {
    mainSerivice.active = 'Recicladoras'
  }

  public recicladoras: Recicladora[] = []

  ngOnInit (): void {
    this.firestoreService.getObjectRealtime<Recicladora>('recicladora', 'id').subscribe(res => {
      this.recicladoras = res
    })
  }

  public async goRecicladora (recicladora: Recicladora): Promise<void> {
    this.recicladoraService.reciladora = recicladora
    await this.router.navigate(['/main/recicladora'])
  }
}
