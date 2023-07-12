import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { PrivateMmoPageComponent } from './pages/private-mmo-page/private-mmo-page.component';
import { ShopResellerPageComponent } from './pages/shop-reseller-page/shop-reseller-page.component';
import { MakeMoneyOnlinePageComponent } from './pages/make-money-online-page/make-money-online-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SupporterPageComponent } from './pages/supporter-page/supporter-page.component';
import {HttpClientModule} from "@angular/common/http";
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';
import {environment} from "../environments/environment";
import { PartnerComponent } from './components/partner/partner.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavigationComponent,
    FooterComponent,
    PrivateMmoPageComponent,
    ShopResellerPageComponent,
    MakeMoneyOnlinePageComponent,
    ExperiencePageComponent,
    AboutPageComponent,
    SupporterPageComponent,
    PartnerComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: API_KEY,
      useValue: environment.googleSheetsApiKey,
    },
    GoogleSheetsDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
