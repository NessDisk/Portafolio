import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-proyect',
  templateUrl: './card-proyect.component.html',
  styleUrls: ['./card-proyect.component.css']
})
export class CardProyectComponent {

  @Input() tittle: string ="text";
  @Input() sumary: string ="sumary";
  @Input() tag1: string ="tag1";

  @Input() tagList: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

      BoolHoverInfoCard_Tittle = false;

  enableHoverInfoCard_tittle(){

   this.BoolHoverInfoCard_Tittle = true;
  }

  disenableHoverInfoCard_tittle(){

    this.BoolHoverInfoCard_Tittle = false;
   }

}
