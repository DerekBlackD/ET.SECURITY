import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'select-profile',
    templateUrl: 'SelectProfile.component.html'
})
export class SelectProfileComponent{

    constructor(private router: Router){
    }

    Cancel():void{
        this.router.navigate(['']);
    }
}