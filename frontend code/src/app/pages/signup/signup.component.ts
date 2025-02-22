import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm: FormGroup;
  userType: string = 'CUSTOMER'; // Default user type
  successMsg: string | undefined;
  errorMsg: string | undefined;

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required ],
      role: ['CUSTOMER', Validators.required],
    });
  }

  setUserType(type: string) {
    this.userType = type;
    this.signupForm.patchValue({ role: type === 'CUSTOMER' ? 'CUSTOMER' : 'ADMIN' }); // Update role accordingly
  }  

  onSignUp() {
    if (this.signupForm.invalid) {
      this.errorMsg = 'Please fill out all required fields correctly.';
      this.successMsg = undefined;
      return;
    }

    const formValues = this.signupForm.value;
    this.authService.signUp(formValues).subscribe({
      next: (data) => {
        console.log(data)
        this.successMsg = 'Sign Up Success, Please login';
        this.errorMsg = undefined;
        this.resetForm();
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = err.msg || 'Sign Up failed. Please try again.';
        this.successMsg = undefined;
      }
    });
  }

  resetForm() {
    this.signupForm.reset({
      role: 'CUSTOMER', // Reset role to default
    });
  }

}
