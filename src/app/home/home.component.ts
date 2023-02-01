import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

  isTaskadded:boolean=false

  publish(data:boolean){
    this.isTaskadded=data
    console.log("inside publish ",data)
  }
}
