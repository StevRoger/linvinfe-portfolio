import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeMoneyOnlinePageComponent } from './make-money-online-page.component';

describe('MakeMoneyOnlinePageComponent', () => {
  let component: MakeMoneyOnlinePageComponent;
  let fixture: ComponentFixture<MakeMoneyOnlinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeMoneyOnlinePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeMoneyOnlinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
