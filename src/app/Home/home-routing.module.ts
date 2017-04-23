import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectProfileComponent }   from './SelectProfile/SelectProfile.component';
import { LandingPageComponent }     from './LandingPage/landing.component';
import { MenuComponent }            from './SecurityMenu/menu.component';

const homeRoutes: Routes = [
  { path: '', component: LandingPageComponent, outlet: 'banner' },
  { path: 'ElegirPerfil', component: SelectProfileComponent },
  { path: 'Menu', component: MenuComponent, outlet: 'banner'}
];
@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
