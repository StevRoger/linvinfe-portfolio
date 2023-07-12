import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GoogleAuthService} from "../../service/google-auth.service";

@Component({
  selector: 'app-shop-reseller-page',
  templateUrl: './shop-reseller-page.component.html',
  styleUrls: ['./shop-reseller-page.component.scss']
})
export class ShopResellerPageComponent implements OnInit {

  listPartners: any[] = [
    {
      name: 'SadamHussain Pato',
      position: 'Sell Auto Approve Page',
      picture: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/332224830_2045888682279919_4341572079599957540_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF2GETXizooZzBBQSP9HEZXou2eUMnAXjai7Z5QycBeNunDanAmBzoyrSTfy9UuoW_td6dJc3xP_3jzY_kGcv9M&_nc_ohc=x5eEszllxp0AX90l8-8&_nc_oc=AQl0-03qdBDnSxveWKSS5KZemURTyhMTo7k7tDv5diMwg7Qdx7T9lIOIpGD5DQ7paxU&_nc_ht=scontent-dfw5-2.xx&oh=00_AfDZZHqzagGuvpQ0tcvR9D77dshzmJ9ucAz_-OtiD_7iAw&oe=64B0721F',
      primaryContact: '',
      secondaryContact: '',
      desc: 'Earn money by placing short ads in your qualifying videos — live and on-demand.'
    },
    {
      name: 'Lan Anh',
      position: 'Sell Auto Approve Page',
      picture: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/318245786_5649385658513211_5646971107054729659_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGiU2pARfSKgs_IqiQsGHmdnKaN7RK6hOqcpo3tErqE6j0MMqEZS-ckzDl19wz9qddkFB4ohcqfKRSGu75f5swH&_nc_ohc=_4QCbPbLiBEAX8E6D2P&_nc_ht=scontent-dfw5-1.xx&oh=00_AfDv8_XwmByQqqk5WkGtPn6ypg-SIcYYO9cfo35DHHczEA&oe=64B0D4B1',
      primaryContact: '',
      secondaryContact: '',
      desc: 'Earn money by placing short ads in your qualifying videos — live and on-demand.'
    },
    {
      name: 'Ha Ra',
      position: 'Sell Auto Approve Page',
      picture: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-1/217786473_988113825310966_9052649598899397306_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGoedJlJmgFfah9t-FCPcr3mRnzvypoFh2ZGfO_KmgWHTGBWTeiYQVSa-1DUga2C5-pU4mG99IOHa3Bb0lbwJNP&_nc_ohc=PqbPC0BnR2EAX_kNulY&_nc_ht=scontent-dfw5-2.xx&oh=00_AfCY4rCdeorY7AQME1Xdjyp9ur70HufxovzlmcqWddTwKw&oe=64B2041F',
      primaryContact: '',
      secondaryContact: '',
      desc: 'Earn money by placing short ads in your qualifying videos — live and on-demand.'
    }
  ]

  listWebsiteBots: any[] = [
    {
      name: 'Working SMM',
      quality: '',
      recommend: true,
      link: 'https://workingsmm.com/'
    },
    {
      name: 'RTT Panel',
      quality: '',
      recommend: true,
      link: 'https://www.rttpanel.com/'
    }
  ]
  constructor(
    private googleAuthService: GoogleAuthService,
  ) { }

  ngOnInit(): void {
    // const sheetId = '1wtoxLlIzzNyKnFWURKDrehvwUvabvIH75rRjV6W2G6Y';
    // const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=json`;
    //
    // this.http.get(url).subscribe(response => {
    //   console.log(JSON.parse(response as string))
    // });

  }

}
