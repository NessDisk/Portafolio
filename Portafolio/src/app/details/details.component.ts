import { Component  , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent {

  
  posX: Number = 0;
  posY: Number = 0;

  

  moverElemento(event: MouseEvent) {
    this.posX = event.clientX;
    this.posY = event.clientY;

  }


  projects: any  = {
    proyecto1: {
      año: "2000",
      name: "proyect 1",
      tags: {
        a: "css",
        b: "react",
        c: "javascript"
      },
      link:"testLink",
    },
    proyecto2: {
      año: "2000",
      name:"proyect 2",
      tags: {
        a: "css",
        b: "react",
        c: "javascript"
      },
      link:"testLink",
    },
    proyecto3: {
      año: "2000",
      name:"proyect 3",
      tags: {
        a: "css",
        b: "react",
        c: "javascript"
      },
      link:"testLink",
    },
  };

  getProyects(): string[] {
    return Object.keys(this.projects);
  }

  getArrayToProyect(obj: object ): string[] {
    return Object.values(obj);
  }

  //animation arrows

  




}
