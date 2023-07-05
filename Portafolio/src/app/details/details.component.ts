import { Component  , ViewEncapsulation, HostListener, OnInit  } from '@angular/core';
import { DataService } from '../../service/data.service';
import * as proyects from '../../assets/data/proyects.json';

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

  lenguage: string = "";

  
  constructor(private dataService: DataService) { 
    

    this.projects = this.dataService.getArrayToProyect(proyects).pop();
  if(this.dataService.getLanguage() == false )   
  this.lenguage = "esp"
  else
  this.lenguage = "eng"
     console.log( this.projects );
  }

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


info: any  = {
  "esp":{
    "tittle": "proyectos",
    "year":"Año",
    "proyect": "proyectos",
    "CreateWiht": "Creado con",
    "link":"Link"

  },
  "eng":{
    "tittle": "Proyects",
    "year":"year",
    "proyect": "proyect",
    "CreateWiht": "Create with",
    "link":"Link"

  }
}

  projects: any  = {
  
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
