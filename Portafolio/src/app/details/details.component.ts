import { Component  , ViewEncapsulation, HostListener, OnInit  } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent {

  
  posX: Number = 0;
  posY: Number = 0;

  movilVersion: boolean = false;

  animationTittle: boolean = false;

  

  moverElemento(event: MouseEvent) {
    this.posX = event.clientX;
    this.posY = event.clientY;

  }

//tittle back page
enableHoverDetailsComeback()
{
  this.animationTittle = true; 
  
}

disenableHoverDetailsComeback()
{
  this.animationTittle = false; 

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
        c: "javascript",
        // d: "css",
        // e: "react",
        // f: "javascript",
        // g: "css",
        // h: "react",
        // i: "javascript",
        // n: "css",
        // l: "react",
        // m: "javascript"
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

  
  //screen wight
  screenWidth: number = 0;
  screenwidthTrigger: boolean= false;

  
  ngOnInit(): void {

    //inicializamos el selector
    this.getScreenSize();
  }

  // Screan wight
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;

    if(this.screenWidth < 1015 )
    {
      this.movilVersion = true;
    }
    else{
      this.movilVersion = false;
    }

    console.log(this.screenWidth);

}

  



}
