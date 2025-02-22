import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  imports: [RouterLink, NgClass],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {

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
