import { Component, Input, ViewChild } from '@angular/core'
import { Promocion } from 'src/app/interfaces/promocion'
import { FirestoreService } from 'src/app/services/firestore.service'

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent {
  constructor (
    private readonly firestoreService: FirestoreService
  ) { }

  @Input() promocion!: Promocion

  @ViewChild('edit') edit!: any

  public showEdit (): void {
    this.edit.toggle()
  }

  public delete (): void {
    void this.firestoreService.delete('promocion', this.promocion.id)
  }
}
