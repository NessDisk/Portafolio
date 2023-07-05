import { Component, HostListener , Input , OnInit , ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-card-proyect',
  templateUrl: './card-proyect.component.html',
  styleUrls: ['./card-proyect.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardProyectComponent {

  @Input() tittle: string ="text";
  @Input() sumary: string ="sumary";
  @Input() tag1: string ="tag1";

  @Input()  dateActualWork: string ="Present - xxxx";
  
  @Input() urlLink: string ="https://www.youtube.com/";
    
  @Input() imgLink: string ="";


  @Input() modeCard: boolean = false;

  @Input() tagList: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

   
  BoolHoverInfoCard_Tittle = false;

  //screen wight
  screenWidth: number = 0;
  screenwidthTrigger: boolean= false;

  // constructor(){
  // this.getScreenSize(); 
  // }   
  ngOnInit(): void {

    //inicializamos el selector
    this.getScreenSize();
  }

  // Screan wight
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;

    if(this.screenWidth < 1015 && this.modeCard == false )
    {
      this.screenwidthTrigger = true;
    }
    else{
      this.screenwidthTrigger = false;
    }

    // console.log(this.screenWidth,this.modeCard);

}



  enableHoverInfoCard_tittle(){

   this.BoolHoverInfoCard_Tittle = true;
  }

  disenableHoverInfoCard_tittle(){

    this.BoolHoverInfoCard_Tittle = false;
   }

   

}
