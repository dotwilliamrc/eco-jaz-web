import { Component, OnInit, ViewChild } from '@angular/core'
import { Promocion } from 'src/app/interfaces/promocion'
import { FirestoreService } from 'src/app/services/firestore.service'
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor (
    public readonly mainService: MainService,
    public readonly firestoreService: FirestoreService
  ) {
    this.mainService.active = 'Ofertas'
  }

  public promociones: Promocion[] = []

  ngOnInit (): void {
    this.firestoreService
      .getObjectOfUserRealtime<Promocion>('promocion', this.mainService.usuario.id, 'uid').subscribe(res => {
      this.promociones = res
    })
  }

  @ViewChild('add') add!: any

  public showAdd (): void {
    this.add.toggle()
  }
}
