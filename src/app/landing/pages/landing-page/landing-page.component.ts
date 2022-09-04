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
      titulo: 'Problemática',
      descripcion: 'Actualmente las personas de Zacate-cas no tienen el hábito de reciclar, así como la administración pública no implementa estrategias con el fin de disminuir la contaminación en ríos, arroyos y almacenes de agua.',
      imagen: '../../../../assets/imagenes/landing-image/landing-image-1',
      clasesHijo: 'text-lg-start',
      clasesContenedorHijo: 'pe-lg-5'
    },
    {
      titulo: 'Objetivo',
      descripcion: 'Fomentar el reciclaje para disminuir la contaminación del agua cielo y aire, impulsar la economía en los negocios locales y apoyar a las personas que reciclan, con beneficios en productos o servicios de uso cotidiano.',
      imagen: '../../../../assets/imagenes/landing-image/landing-image-2',
      clasesPadre: 'flex flex-row-reverse',
      clasesHijo: 'text-lg-end',
      clasesContenedorHijo: 'pe-lg-5'
    },
    {
      titulo: 'Propuesta de valor',
      descripcion: 'Disminución de micro plásticos en el medio ambiente, especialmente en ríos, arroyos y almacenes de agua.',
      imagen: '../../../../assets/imagenes/landing-image/landing-image-3',
      clasesHijo: 'text-lg-start',
      clasesContenedorHijo: 'ps-lg-5'

    }
  ]
}
