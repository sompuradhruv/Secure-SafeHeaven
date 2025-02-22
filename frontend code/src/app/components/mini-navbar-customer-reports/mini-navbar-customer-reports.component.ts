import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mini-navbar-customer-reports',
  imports: [RouterLink, NgClass],
  templateUrl: './mini-navbar-customer-reports.component.html',
  styleUrl: './mini-navbar-customer-reports.component.css'
})
export class MiniNavbarCustomerReportsComponent {

  linkType: string='my-reports';
   
  linkClick(linkType:string){
    this.linkType = linkType;
  }

  getClassCustomer(){
    return {
      active: this.linkType === 'my-reports'?true: false
    }
  }

  getClassEntity(){
    return {
      active: this.linkType === 'all-reports'?true: false
    }
  }

}
