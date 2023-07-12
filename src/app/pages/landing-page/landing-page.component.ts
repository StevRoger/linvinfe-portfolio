import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  listService: any[] = [
    {
      name: 'In-Stream Ads',
      image: '',
      logo: 'assets/logo/fb-watch.png',
      category: 'Facebook',
      desc: 'ការបង្រៀន អនុវត្គ ចែករំលែក គន្លឹះថ្មីៗ ទាក់ទងទៅនឹង Facebook Ads-Breaks, Live, Star, Partner, ផ្សេងៗជាច្រើនទៀត យើងខ្ញុំនឹងដាក់ចូលក្នុងនេះ។',
      link: ''
    },
    {
      name: 'Reels',
      image: '',
      logo: 'assets/logo/fb-reels.png',
      category: 'Facebook',
      desc: 'ការបង្រៀន អនុវត្គ ចែករំលែក គន្លឹះថ្មីៗ ទាក់ទងទៅនឹង Facebook Reels, Ads On Reels, Ads Overlay, Bonus Performance ជាច្រើនទៀត យើងខ្ញុំនឹងដាក់ចូលក្នុងនេះ។',
      link: ''
    },
    {
      name: 'YouTube',
      image: '',
      logo: 'assets/logo/youtube-1.png',
      category: 'Google',
      desc: 'ការបង្រៀន អនុវត្គ ចែករំលែក គន្លឹះថ្មីៗ ទាក់ទងទៅនឹង YouTube ការធ្វើ Contents បង្រៀននឹងចែករំលែកអ្វីដែលថ្មីៗ ព្រមទាំង Templates how to… ជាច្រើនទៀតដែលយើងខ្ញុំបានដាក់បញ្ចូលទៅក្នុង Website & Youtube.',
      link: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
