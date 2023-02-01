import { Component, EventEmitter, Output } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.css']
})
export class TaskaddComponent {
  constructor(private service:TaskService){}

  @Output()notify:EventEmitter<boolean>=new EventEmitter<boolean>()


  taskform= new FormGroup({
    "task_name":new FormControl("",[Validators.required])

  })
 get task_name(){
  return this.taskform.get("task_name")

 }
 createtask(){
  this.notify.emit(false)
  let data=this.taskform.value
  this.service.addTask(data).then((res:any)=>res.json()).then(data=>{console.log("task created")
  this.notify.emit(true)}).
  catch(err=>alert(err))
  

 }

}
