import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getToken(data: any) {
    let options = {
      "method": "post",
      "body": JSON.stringify(data),
      "headers": {
        "content-type": "application/json"
      }
    }
    return fetch("http://127.0.0.1:8000/token/", options)
  }
  addTask(data: any) {
    let token = localStorage.getItem("token")
    if (token) {
      let options = {
        "method": "post",
        "body": JSON.stringify(data),
        "headers": {
          "content-type": "application/json",
          "authorization": token
        }

      }
      return fetch("http://127.0.0.1:8000/tasks/", options)
    }
    else {
      return new Promise((res, rej) => rej("failed to fetch data from resource"))
    }
  }

  listTask() {
    let token = localStorage.getItem("token")
    if (token) {
      let options = {
        "method": "get",  
        "headers": {
          "content-type": "application/json",
          "authorization": token
        }
      }
      return fetch("http://127.0.0.1:8000/tasks/", options)
    }
    else {
      return new Promise((res, rej) => rej("failed to fetch data from resource"))
    }
  }


  removeTask(id:number){
    let token = localStorage.getItem("token")
    if (token) {
      let options = {
        "method": "delete",  
        "headers": {
          "content-type": "application/json",
          "authorization": token
        }
      }
      return fetch(`http://127.0.0.1:8000/tasks/${id}/`, options)
    }
    else {
      return new Promise((res, rej) => rej("failed to fetch data from resource"))
    }
  }
}
