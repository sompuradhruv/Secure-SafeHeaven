import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mini-navbar-customer-posts',
  imports: [RouterLink, NgClass],
  templateUrl: './mini-navbar-customer-posts.component.html',
  styleUrl: './mini-navbar-customer-posts.component.css'
})
export class MiniNavbarCustomerPostsComponent {

  linkType: string='my-posts';
   
  linkClick(linkType:string){
    this.linkType = linkType;
  }

  getClassCustomer(){
    return {
      active: this.linkType === 'my-posts'?true: false
    }
  }

  getClassEntity(){
    return {
      active: this.linkType === 'all-posts'?true: false
    }
  }

}
