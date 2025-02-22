import { Component } from '@angular/core';
import { MiniNavbarCustomerPostsComponent } from "../mini-navbar-customer-posts/mini-navbar-customer-posts.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer-union-posts',
  imports: [MiniNavbarCustomerPostsComponent, RouterOutlet],
  templateUrl: './customer-union-posts.component.html',
  styleUrl: './customer-union-posts.component.css'
})
export class CustomerUnionPostsComponent {

}
