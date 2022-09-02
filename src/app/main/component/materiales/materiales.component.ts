import { Component } from '@angular/core'
import { CardOne } from 'src/app/shared/interfaces/card-one'
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.scss']
})
export class MaterialesComponent {
  constructor (
    private readonly mainSerivice: MainService
  ) {
    mainSerivice.active = 'Materiales'
  }

  public materiales: CardOne[] = [
    {
      material: {
        imagen: '../../../assets/imagenes/materiales/no-pet.jpg',
        nombre: 'Pl\u00E1stico: no PET',
        costoXunidad: '5.00 puntos por kg',
        costo: 5
      }
    },
    {
      material: {
        imagen: '../../../assets/imagenes/materiales/plastico.jpg',
        nombre: 'Pl\u00E1stico: PET',
        costoXunidad: '4.50 puntos por kg',
        costo: 4.5
      }
    },
    {
      material: {
        imagen: '../../../assets/imagenes/materiales/carton.jpg',
        nombre: 'Cart\u00F3n',
        costoXunidad: '1.40 puntos por kg',
        costo: 1.4
      }
    },
    {
      material: {
        imagen: '../../../assets/imagenes/materiales/vidrio.jpg',
        nombre: 'Vidrio',
        costoXunidad: '0.85 puntos por kg',
        costo: 0.85
      }
    },
    {
      material: {
        imagen: '../../../assets/imagenes/materiales/metal.jpg',
        nombre: 'Metal',
        costoXunidad: '0.85 puntos por kg',
        costo: 0.85
      }
    }
  ]
}
