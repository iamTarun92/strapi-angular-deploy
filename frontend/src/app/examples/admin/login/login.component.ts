import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { AuthService } from 'app/guard/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    navbar.classList.remove('navbar-transparent');


    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const credentials = {
      identifier: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    this.apiService.handelLogin('/auth/local', credentials).subscribe({
      next: (response) => {
        alert('Login Sucsess')
        this.loginForm.reset()
        this.authService.login()
        this.router.navigate(['/contact-lists'])
      },
      error: (error) => alert('Please contact admin.')
    })
  }

}
