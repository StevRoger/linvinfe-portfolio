import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMmoPageComponent } from './private-mmo-page.component';

describe('PrivateMmoPageComponent', () => {
  let component: PrivateMmoPageComponent;
  let fixture: ComponentFixture<PrivateMmoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateMmoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateMmoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
