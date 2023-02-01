import { Component,DoCheck,Input,OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit,OnChanges{
  @Input()inpt:boolean=false
  allTask:any

  constructor(private service:TaskService){

  }
 ngOnInit(): void {

  this.service.listTask().then((res:any)=>res.json()).then(data=>this.allTask=data).catch(err=>alert("invalid list"))
   
 }
 ngOnChanges(): void {
   console.log(this.inpt)
   console.log("invoked",this.inpt)
   if (this.inpt){
    this.service.listTask().then((res:any)=>res.json()).then(data=>this.allTask=data).catch(err=>alert("invalid list"))
   }

 }
//  ngDoCheck(): void {
//   this.service.listTask().then((res:any)=>res.json()).then(data=>this.allTask=data)
//  }
 deleteTask(id:number){
  this.service.removeTask(id).then((res:any)=>this.ngOnChanges())
 }

}
