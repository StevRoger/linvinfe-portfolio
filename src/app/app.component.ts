import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'linvinfe-portfolio';

  constructor(
    private router: Router
  ) {
  }

  listMenus: any[] = [
    {
      name: 'Home',
      link: '',
      icon: '',
    },
    {
      name: 'About Me',
      link: 'about',
      icon: '',
    },
    {
      name: 'Share Experience',
      link: 'experience',
      icon: '',
    },
    {
      name: 'Shop Reseller',
      link: 'shop-reseller',
      icon: '',
    },
    {
      name: 'MMO Private',
      link: 'mmo-private',
      icon: '',
    },
    {
      name: 'Make Money Online',
      link: 'mmo',
      icon: '',
    },
    {
      name: 'Supporters',
      link: 'supporter',
      icon: '',
    }
  ]

  onChangePage(link: string) {
    if (link) {
      this.router.navigate(['/', link]).then();
    } else {
      this.router.navigate(['./']).then();
    }
  }
}
