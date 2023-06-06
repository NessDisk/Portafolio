import { Component , HostListener , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})


export class NavbarComponent {
  isNavbarVisible: boolean = false;
  darkMode = false;
  switchState: boolean = false;
  switchStateIdioms: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.onWindowScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isNavbarVisible = scrollTop === 0;
  }
  
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    const element = document.getElementById('mi-elemento');
    

    if (this.switchState) {
      // El switch está activado
      console.log('El switch está activado');
      // Ejecutar otras acciones
      document.body.classList.add('dark-mode');

        if(element)
          element.style.backgroundColor = "white" ;
    } else {
      // El switch está desactivado
      console.log('El switch está desactivado');
      // Ejecutar otras acciones
      document.body.classList.remove('dark-mode');

        if(element)
          element.style.backgroundColor = "black" ;
    }
          
  }
  
  idioms() {
    // this.darkMode = !this.darkMode;
    // const element = document.getElementById('');
   this.switchStateIdioms = this.switchStateIdioms!;
    
   
   if (this.switchStateIdioms) {
     //es
      console.log('El switch español activado');
      this.dataService.setVariable('en');
    
    } else {
      //en
      console.log('El switch english desactivado');
      this.dataService.setVariable('es');
    }
          
  }


}
