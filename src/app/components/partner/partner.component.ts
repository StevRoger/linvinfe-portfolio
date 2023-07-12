import {Component, Input, OnInit} from '@angular/core';
import {Partner} from "../../service/sheet.model";

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  @Input() partner: Partner;
  constructor() {
    this.partner = {} as Partner;
  }

  ngOnInit(): void {
  }

  getRange(n: number): number[] {
    return Array.from({length: n}, (_, index) => index + 1);
  }
}
