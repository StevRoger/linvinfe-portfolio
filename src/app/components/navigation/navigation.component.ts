import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public scrollOffset: number = 0;
  @Output() public sidebarSubmitter: EventEmitter<string> = new EventEmitter<string>();
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.scrollOffset = event.currentTarget.pageYOffset;
  }
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onOpenSidebar(): void {
    this.sidebarSubmitter?.emit('open');
  }

  onLogoClick(): void {
    this.router.navigate(['/']).then();
  }
}
