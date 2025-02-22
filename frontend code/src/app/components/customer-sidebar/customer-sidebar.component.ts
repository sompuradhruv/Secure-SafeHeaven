import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-sidebar',
  imports: [NgClass, RouterLink],
  templateUrl: './customer-sidebar.component.html',
  styleUrl: './customer-sidebar.component.css'
})
export class CustomerSidebarComponent {

  linkType: string='customer-reports';
   
  linkClick(linkType:string){
    this.linkType = linkType;
  }

  getClassLog(){
    return {
      active: this.linkType === 'customer-reports'?true: false
    }
  }

  getClassRequest(){
    return {
      active: this.linkType === 'customer-posts'?true: false
    }
  }

  getClassPerformance(){
    return {
      active: this.linkType === 'customer-pms'?true: false
    }
  }

}
