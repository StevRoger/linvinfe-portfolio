import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {PrivateMmoPageComponent} from "./pages/private-mmo-page/private-mmo-page.component";
import {ShopResellerPageComponent} from "./pages/shop-reseller-page/shop-reseller-page.component";
import {ExperiencePageComponent} from "./pages/experience-page/experience-page.component";
import {MakeMoneyOnlinePageComponent} from "./pages/make-money-online-page/make-money-online-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {SupporterPageComponent} from "./pages/supporter-page/supporter-page.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'mmo-private', component: PrivateMmoPageComponent},
  {path: 'shop-reseller', component: ShopResellerPageComponent},
  {path: 'experience', component: ExperiencePageComponent},
  {path: 'mmo', component: MakeMoneyOnlinePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'supporter', component: SupporterPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
