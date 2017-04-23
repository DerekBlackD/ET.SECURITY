import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeUserComponent }   from './Home/home-user.component';

const userRoutes: Routes = [
  { path: 'Usuario', component: HomeUserComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }