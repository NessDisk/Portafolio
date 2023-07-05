import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-link-comp',
  templateUrl: './link-comp.component.html',
  styleUrls: ['./link-comp.component.css']
})
export class LinkCompComponent {

  @Input() linkText: string ="http://localhost:4200/";
  @Input() TextTittle: string ="http://localhost:4200/";

  Movearrow: boolean =false;

  enableAnimationArrow(){
this.Movearrow = true;
  }

  disenableAnimationarrow(){
    this.Movearrow = false;
  }

}
