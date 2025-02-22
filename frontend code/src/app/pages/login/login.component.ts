import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  successMsg: string | undefined;
  errorMsg: string | undefined;
  msg: string | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.actRoute.queryParams.subscribe(p => {
      this.msg = p['msg'];
    });
  }

  onLogin() {
    this.authService.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (data) => {
        let token = data.token;
        // Call the API to get user details using the token
        this.authService.getUserDetails(token).subscribe({
          next: (userDetails) => {
            localStorage.setItem('token', token);
            localStorage.setItem('username', userDetails.username);
            localStorage.setItem('name', userDetails.name);
            localStorage.setItem('id', userDetails.id);
            let role = userDetails.role;
            let vendorApproved = userDetails.vendor_approved;
            
            // Navigate based on role
            switch (role) {
              case 'CUSTOMER':
                this.router.navigateByUrl("/customer");
                this.successMsg = "CUSTOMER Logged In.";
                break;
              case 'ADMIN':
                this.router.navigateByUrl("/admin");
                this.successMsg = "ADMIN Logged In.";
                break;
              default:
                this.router.navigateByUrl("/broken-link");
                break;
            }
          },
          error: (err) => {
            this.errorMsg = err.error.msg;
          }
        });
      },
      error: (err) => {
        this.errorMsg = err.error.msg;
      }
    });
  }

}
