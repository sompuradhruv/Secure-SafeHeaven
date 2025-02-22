import { Component } from '@angular/core';
import { LoginHeaderComponent } from "../../components/login-header/login-header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authentication',
  imports: [LoginHeaderComponent, RouterOutlet],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

}
