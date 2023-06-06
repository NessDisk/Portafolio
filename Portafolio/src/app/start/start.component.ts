import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  
  currentLanguage: string = 'es';
  
  

  constructor(private dataService: DataService) { }

  translations: { [key: string]: string } = {
    en: '<strong>Hello</strong>',
    es: 'Profesor de tecnología, Indi Dev game y Full Stack Web Developer, con conocimiento <br>  en <b>JavaScript</b>, <b>HTML</b>,  <b>CSS</b>,   <b>Git</b>,  <b>GitHub</b >, <b>React</b>, <b>React-hooks</b>, <b>NodeJS</b> <br> , <b>JS</b> , <b>GraphQL</b> , <b>SCRUM</b> , <b>Firebase</b> , <b>C#</b> , <b> Unity</b> , <b>Mysqul</b><br>  <br>              Profesional con gran apertura a nuevos aprendizajes, proactivo, motivado, innovador, orientado<br>      a resultados, motivación por el logro y trabajo en equipo con capacidad para integrar grupos<br>              profesionales multidisciplinarios en busca de una meta común.<br> <br>            Con destacadas habilidades de comunicación efectiva, de rápida adaptación a diferentes tareas<br>       laborales y una clara disposición al cumplimiento de tareas.<br>  <br> '
  };
  
  // es / eng
  changeLanguage(language: string) {
    
    // this.currentLanguage = language;

    if(this.currentLanguage == "es")
    this.currentLanguage =  "en";
    else
    this.currentLanguage =  "es";
  
  }

  ngOnInit(): void {
   
    // this.currentLanguage =  this.dataService.getVariable();

    this.dataService.getVariable().subscribe(value => {
      this.currentLanguage = value;
      // this.doSomething(); 
    });
  
  }

  doSomething() {
    // Realiza las acciones que deseas cuando la variable cambie en el Componente 1
  }

}
