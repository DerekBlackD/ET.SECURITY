import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: 'Login.component.html'
})
export class LoginComponent{

    constructor(private router: Router){

    }

    signIn():void{
        this.router.navigateByUrl("/ElegirPerfil(banner:Menu)");
    }
}