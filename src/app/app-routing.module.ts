import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent }   from './Login/Login.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'clases', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
