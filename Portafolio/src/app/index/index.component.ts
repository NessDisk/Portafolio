import { Component } from '@angular/core';
import { CardProyectComponent } from '../card-proyect/card-proyect.component';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  
  mostrarAnimacion1 = false;
  mostrarAnimacion2 = false;
  mostrarAnimacion3 = false;

  scrollToPoint(value: Number) {


    if(value == 1){
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
   else if(value == 2){
      
      window.scrollTo({
        top: 500,
        behavior: 'smooth'
      });
    }

   else{      
      window.scrollTo({
        top: 1000,
        behavior: 'smooth'
      });
    }
  }

  // Animation tittle

  activarAnimacion(value: Number) {
 

    if(value == 1)
    this.mostrarAnimacion1 = true;
    else if(value == 2)
    this.mostrarAnimacion2 = true;
    else
    this.mostrarAnimacion3 = true;
  }

  desactivarAnimacion(value: Number) {
    if(value == 1)
    this.mostrarAnimacion1 = false;
    else if(value == 2)
    this.mostrarAnimacion2 = false;
    else
    this.mostrarAnimacion3 = false;
  }
  
}
