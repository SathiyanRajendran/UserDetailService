import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users=[
    {name:'John',job:'Teacher',gender:'Male',country:'United States',age:35,avatar:'assets/Images/SATHIYAN R - Passport Size Photo (1).jpg'},
    {name:'Regina',job:'IT Employee',gender:'Female',country:'United States',age:35,avatar:'assets/Images/SATHIYAN R - Passport Size Photo (1).jpg'},
    {name:'Saradhi',job:'Manager',gender:'Male',country:'United States',age:35,avatar:'assets/Images/SATHIYAN R - Passport Size Photo (1).jpg'},
    {name:'Keerthana',job:'HR',gender:'Female',country:'United States',age:35,avatar:'assets/Images/SATHIYAN R - Passport Size Photo (1).jpg'},

  ]
  OnShowDetailsClicked=new EventEmitter<{name:string,job:string,gender:string,country:string,age:number,avatar:string}>();
  //create a event
  ShowUserDetails(user:{name:string,job:string,gender:string,country:string,age:number,avatar:string})
  {
    this.OnShowDetailsClicked.emit(user);
  }
  constructor() { }
}
