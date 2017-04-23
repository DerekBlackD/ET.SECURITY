import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';

import { HomeUserComponent }   from './Home/home-user.component';

import { UserRoutingModule }   from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    HomeUserComponent
  ],
  providers: []
})
export class UserModule {}
