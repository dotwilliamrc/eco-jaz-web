import { Component, Input, ViewChild } from '@angular/core'
import { Promocion } from 'src/app/interfaces/promocion'

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent {
  @Input() promocion!: Promocion

  @ViewChild('edit') edit!: any

  public showEdit (): void {
    this.edit.toggle()
  }
}
