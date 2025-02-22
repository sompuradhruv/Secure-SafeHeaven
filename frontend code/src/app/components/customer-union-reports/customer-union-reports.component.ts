import { Component } from '@angular/core';
import { MiniNavbarCustomerReportsComponent } from "../mini-navbar-customer-reports/mini-navbar-customer-reports.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer-union-reports',
  imports: [MiniNavbarCustomerReportsComponent, RouterOutlet],
  templateUrl: './customer-union-reports.component.html',
  styleUrl: './customer-union-reports.component.css'
})
export class CustomerUnionReportsComponent {

}
