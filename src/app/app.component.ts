import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  title = 'UserDetailService';
  myimg:string='assets/Images/Natural scenes.jpg'
  constructor(private userService:UserService){

  }
}
