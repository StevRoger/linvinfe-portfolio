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
      desc: 'ការបង្រៀន អនុវត្គ ចែករំលែក គន្លឹះថ្មីៗ ទាក់ទងទៅនឹង <span class="fw-semibold">Facebook Ads-Breaks, Live, Star, Partner</span> ផ្សេងៗជាច្រើនទៀត យើងខ្ញុំនឹងដាក់ចូលក្នុងនេះ។',
      link: '/experience'
    },
    {
      name: 'Reels',
      image: '',
      logo: 'assets/logo/fb-reels.png',
      category: 'Facebook',
      desc: `ការបង្រៀន អនុវត្គ ចែករំលែក គន្លឹះថ្មីៗ ទាក់ទងទៅនឹង <span class="fw-semibold">Facebook Reels, Ads On Reels, Ads Overlay, Bonus Performance</span>ជាច្រើនទៀត យើងខ្ញុំនឹងដាក់ចូលក្នុងនេះ។`,
      link: '/experience'
    },
    {
      name: 'YouTube',
      image: '',
      logo: 'assets/logo/youtube-1.png',
      category: 'Google',
      desc: 'ការបង្រៀន អនុវត្គ ចែករំលែក គន្លឹះថ្មីៗ ទាក់ទងទៅនឹង <span class="fw-semibold">YouTube</span> ការធ្វើ <span class="fw-semibold">Contents</span> បង្រៀននឹងចែករំលែកអ្វីដែលថ្មីៗ ព្រមទាំង <span class="fw-semibold">Templates how to…</span> ជាច្រើនទៀតដែលយើងខ្ញុំបានដាក់បញ្ចូលទៅក្នុង <span class="fw-semibold">Website & Youtube.</span>',
      link: '/experience'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
