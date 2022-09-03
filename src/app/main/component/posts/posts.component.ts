import { Component, OnInit, ViewChild } from '@angular/core'
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor (
    public readonly mainService: MainService
  ) {
    this.mainService.active = 'Ofertas'
  }

  ngOnInit (): void {
  }

  @ViewChild('add') add!: any

  public showAdd (): void {
    this.add.toggle()
  }
}
