import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users=[
    {name:'John',job:'Teacher',gender:'Male',country:'United States',age:35},
    {name:'Regina',job:'IT Employee',gender:'Female',country:'United States',age:35},
    {name:'Saradhi',job:'Manager',gender:'Male',country:'United States',age:35},
    {name:'Keerthana',job:'HR',gender:'Female',country:'United States',age:35},

  ]
  OnShowDetailsClicked=new EventEmitter<{name:string,job:string,gender:string,country:string,age:number}>();
  ShowUserDetails(user:{name:string,job:string,gender:string,country:string,age:number})
  {
    this.OnShowDetailsClicked.emit(user);
  }
  constructor() { }
}
