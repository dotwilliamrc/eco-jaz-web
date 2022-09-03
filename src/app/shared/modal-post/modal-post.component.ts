import { Component, Input, OnInit } from '@angular/core'
declare const window: any

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.scss']
})
export class ModalPostComponent implements OnInit {
  constructor() { }

  @Input() titulo: string = 'Nuevo'
  private modal!: any

  ngOnInit (): void {
    this.modal = new window.bootstrap.Modal(
      document.getElementById('staticBackdrop')
    )
  }

  public toggle (): void {
    this.modal.show()
  }
}
