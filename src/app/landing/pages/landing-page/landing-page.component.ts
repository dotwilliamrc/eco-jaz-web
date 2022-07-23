import { Component } from '@angular/core'
import { Info } from '../../interfaces/info'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent {
  public articulos: Info[] = [
    {
      titulo: 'El titulo se incertara en esta parte',
      descripcion: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat' +
        'reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex' +
        'esse exercitation amet. Nisi anim cupidatat excepteur officia.' +
        'Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate.',
      imagen: '../../../../assets/imagenes/landing-image/landing-image-1',
      clasesHijo: 'text-lg-start',
      clasesContenedorHijo: 'ps-lg-5'
    },
    {
      titulo: 'El titulo se incertara en esta parte',
      descripcion: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat' +
        'reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex' +
        'esse exercitation amet. Nisi anim cupidatat excepteur officia.' +
        'Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate.',
      imagen: '../../../../assets/imagenes/landing-image/landing-image-2',
      clasesPadre: 'flex flex-row-reverse',
      clasesHijo: 'text-lg-end',
      clasesContenedorHijo: 'pe-lg-5'
    },
    {
      titulo: 'El titulo se incertara en esta parte',
      descripcion: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat' +
        'reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex' +
        'esse exercitation amet. Nisi anim cupidatat excepteur officia.' +
        'Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate.',
      imagen: '../../../../assets/imagenes/landing-image/landing-image-3',
      clasesHijo: 'text-lg-start',
      clasesContenedorHijo: 'pe-lg-5'
    }
  ]
}
