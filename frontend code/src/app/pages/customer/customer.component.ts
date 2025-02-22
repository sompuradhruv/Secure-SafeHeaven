import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterOutlet} from '@angular/router';
import { CustomerSidebarComponent } from "../../components/customer-sidebar/customer-sidebar.component";

@Component({
  selector: 'app-customer',
  imports: [NavbarComponent, RouterOutlet, CustomerSidebarComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
