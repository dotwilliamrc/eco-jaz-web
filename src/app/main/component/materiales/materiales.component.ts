import { Component } from '@angular/core'
import { CardOne } from 'src/app/shared/interfaces/card-one'

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.scss']
})
export class MaterialesComponent {
  public materiales: CardOne[] = [
    {
      imagen: '../../../assets/imagenes/materiales/no-pet.jpg',
      titulo: 'Pl\u00E1stico: no PET',
      cuerpo: '5.00 puntos por kg',
      costo: 5
    },
    {
      imagen: '../../../assets/imagenes/materiales/plastico.jpg',
      titulo: 'Pl\u00E1stico: PET',
      cuerpo: '4.50 puntos por kg',
      costo: 4.5
    },
    {
      imagen: '../../../assets/imagenes/materiales/carton.jpg',
      titulo: 'Cart\u00F3n',
      cuerpo: '1.40 puntos por kg',
      costo: 1.4
    },
    {
      imagen: '../../../assets/imagenes/materiales/vidrio.jpg',
      titulo: 'Vidrio',
      cuerpo: '0.85 puntos por kg',
      costo: 0.85
    },
    {
      imagen: '../../../assets/imagenes/materiales/metal.jpg',
      titulo: 'Metal',
      cuerpo: '0.85 puntos por kg',
      costo: 0.85
    }
  ]
}
