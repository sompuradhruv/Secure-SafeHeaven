import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterOutlet} from '@angular/router';
import { AdminSidebarComponent } from "../../components/admin-sidebar/admin-sidebar.component";

@Component({
  selector: 'app-admin',
  imports: [NavbarComponent, RouterOutlet, AdminSidebarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
