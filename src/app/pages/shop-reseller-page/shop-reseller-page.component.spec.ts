import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopResellerPageComponent } from './shop-reseller-page.component';

describe('ShopResellerPageComponent', () => {
  let component: ShopResellerPageComponent;
  let fixture: ComponentFixture<ShopResellerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopResellerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopResellerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
