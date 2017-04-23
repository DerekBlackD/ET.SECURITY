import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';

import { SelectProfileComponent }   from './SelectProfile/SelectProfile.component';
import { MenuComponent }            from './SecurityMenu/menu.component';
import { LandingPageComponent }     from './LandingPage/landing.component';

import { HomeRoutingModule }        from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [
    SelectProfileComponent,
    MenuComponent,
    LandingPageComponent
  ],
  providers: []
})
export class HomeModule {}
