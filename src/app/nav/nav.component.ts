import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {


 constructor(private router:Router){

 }
  signOut(){
    if("token" in localStorage ){
      localStorage.removeItem("token")
    }
    this.router.navigateByUrl("")

  }

  
}
