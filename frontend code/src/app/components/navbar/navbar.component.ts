import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  name: any; 
  
  constructor(private router: Router){
    this.name = localStorage.getItem('name');
  }
  logout(){
      localStorage.clear();
      console.log("after logout"+localStorage.getItem('token'))
      this.router.navigateByUrl('login?msg=you have successfully logged out')
  }

}
