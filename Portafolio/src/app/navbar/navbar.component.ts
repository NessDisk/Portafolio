import { Component , HostListener , OnInit  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarVisible: boolean = false;

  ngOnInit() {
    this.onWindowScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isNavbarVisible = scrollTop === 0;
  }
  
}
