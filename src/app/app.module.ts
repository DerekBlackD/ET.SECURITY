import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { FormsModule }           from '@angular/forms';
import { HttpModule }            from '@angular/http';

//Components
import { AppComponent }          from './app.component';
import { AppRoutingModule }      from './app-routing.module';
import { HomeModule }            from './Home/home.module';
import { UserModule }            from './User/user.module';

import { LoginComponent }        from './Login/Login.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';

//Controls
import { InputTextModule, ButtonModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    ButtonModule,
    HomeModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
