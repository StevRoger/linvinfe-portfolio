import {Component, Input, OnInit} from '@angular/core';
import {Partner} from "../../service/sheet.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() list: Partner[] = [];
  constructor() {
  }

  ngOnInit(): void {
  }

  getRange(n: number): number[] {
    return Array.from({length: n}, (_, index) => index + 1);
  }
}
