import { Component, HostListener , OnInit , ViewEncapsulation } from '@angular/core';
import { CardProyectComponent } from '../card-proyect/card-proyect.component';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  
})
export class IndexComponent {

  titulo : string="Titulo de prueba";
  resumen : string="Esto es un resumendel proyecto";
  tagtest : string="css";
  
  mostrarAnimacion1 = false;
  mostrarAnimacion2 = false;
  mostrarAnimacion3 = false;
  isSelectec : Number = 0;
  isOVerSelecte : Number = 0;


  posX: Number = 0;
  posY: Number = 0;

//screen wight
  screenWidth: number = 0;
  screenwidthTrigger: boolean= false;

  BoolshadowEffectcard: boolean = false;

  // constructor(private dataService: DataService) {
  //   this.screenwidthTrigger = this.dataService.getScreenSize();
  //   console.log(this.dataService.getScreenSize());
  //  }

  enableBoolshadowEffectcard()
  {
    this.BoolshadowEffectcard = true;
   
  }

  DisenableBoolshadowEffectcard()
  {
    this.BoolshadowEffectcard = false;
    
  }

  moverElemento(event: MouseEvent) {
    this.posX = event.clientX;
    this.posY = event.clientY;
    // console.log("Segue elemento")
  }


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

  activarAnimacionMouseEnter(value: Number) {
 
    this.isOVerSelecte = value;

    if(value == 1)
    this.mostrarAnimacion1 = true;
    else if(value == 2)
    this.mostrarAnimacion2 = true;
    else
    this.mostrarAnimacion3 = true;
  }



  activarAnimacion(value: Number) {
 
    if(value == 1)
    this.mostrarAnimacion1 = true;
    else if(value == 2)
    this.mostrarAnimacion2 = true;
    else
    this.mostrarAnimacion3 = true;
  }



  desactivarAnimacion() {
    
    this.isOVerSelecte =0;

    if(  this.isSelectec != 1)
    this.mostrarAnimacion1 = false;
    if(   this.isSelectec != 2)
    this.mostrarAnimacion2 = false;
    if(   this.isSelectec != 3)
    this.mostrarAnimacion3 = false;

  }



  desactivarAnimacionAll() {
    if(  this.isSelectec != 1 &&  this.isOVerSelecte != 1)
    this.mostrarAnimacion1 = false;
    if(   this.isSelectec != 2 && this.isOVerSelecte != 2)
    this.mostrarAnimacion2 = false;
    if(   this.isSelectec != 3 && this.isOVerSelecte != 3)
    this.mostrarAnimacion3 = false;
  }


  ngOnInit(): void {

    //inicializamos el selector
    this.onWindowScroll();
    this.getScreenSize();
    // this.dataService.setScreenSize();
    // this.screenwidthTrigger = this.dataService.getScreenSize();
    // console.log(this.dataService.getScreenSize());
    
  }

  // selector index
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if(scrollTop >= 0 &&  scrollTop <= 499)
    this.isSelectec = 1;
    else if(scrollTop >= 500 &&  scrollTop <= 999)
    this.isSelectec = 2;
    else 
    this.isSelectec = 3;

    this.activarAnimacion(this.isSelectec);
    this. desactivarAnimacionAll();

 
  }
// Screan wight
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
        this.screenWidth = window.innerWidth;

        if(this.screenWidth > 767 )
        {
          this.screenwidthTrigger = true;
        }
        else{
          this.screenwidthTrigger = false;
        }
        console.log(this.screenWidth);



  }

  //exp
  exps: any  = {
    proyecto1: {
      title: "a",
      description: "asdg casdca n kja ka jan anj aj sb ab bajb jakb bakj bakjb jkbabijaj niaj nai aun aksjkajksnankjsnajk nan an naknajn jak jajbab absjnian ijabjbabhas ja",
      tags: {a: "css",
             b: "react",
             c: "javascript"},
        dateinfo:"2022 -PRESENT"
            }
              };

  // info proyects

  projects: any  = {
    proyecto1: {
      title: "a",
      description: "asdg casdca n kja ka jan anj aj sb ab bajb jakb bakj bakjb jkbabijaj niaj nai aun aksjkajksnankjsnajk nan an naknajn jak jajbab absjnian ijabjbabhas ja",
      tags: {
        a: "css",
        b: "react",
        c: "javascript"
      },


    },
    proyecto2: {
      title: "b",
      description:"asdg casdca n kja ka jan anj aj sb ab bajb jakb bakj bakjb jkbabijaj niaj nai aunjn na aljl jajkaj lkaj lja klaj kljak ljlajlajslajiaisojian ijabjbabhas ja",
      tags: {
        a: "css",
        b: "react",
        c: "javascript"
      }
    },
    proyecto3: {
      title: "c",
      description:"asdg casdca n kja ka jan anj aj sb ab bajb jakb bakj ksjkalwsnjnian ijabjbabhas ja",
      tags: {
        a: "css",
        b: "react",
        c: "javascript"
      }
    },
  };

  getProyects(obj: object): string[] {
    return Object.keys(obj);
  }

  getArrayToProyect(obj: object ): string[] {
    return Object.values(obj);
  }


  
}
