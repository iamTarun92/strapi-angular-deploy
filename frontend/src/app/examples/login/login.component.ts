import { SocialUser, SocialAuthService, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { AuthService } from 'app/guard/auth.service';
import { BgImage, LoginForm } from 'app/models/login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data: Date = new Date();
    focus;
    focus1;
    loginFormData: LoginForm
    bgImage: BgImage
    socialUser!: SocialUser;
    isLoggedin?: boolean = undefined;
    loginForm: FormGroup;


    constructor(private socialAuthService: SocialAuthService, private fb: FormBuilder, private apiService: ApiService, private router: Router, private authService: AuthService
    ) { }


    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });

        this.socialAuthService.authState.subscribe((user) => {
            this.socialUser = user;
            this.isLoggedin = user != null;
        });

        this.apiService.getLoginPage().subscribe({
            next: (response) => {
                this.loginFormData = response.data.attributes.loginForm
                this.bgImage = response.data.attributes.bgImage
            }
        })


        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    onSubmit() {
        const credentials = {
            identifier: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value
        };
        this.apiService.handelLogin('/auth/local', credentials).subscribe({
            next: (response) => {
                this.loginForm.reset()
                this.authService.login()
                sessionStorage.setItem('userId', response.user.id)
                this.router.navigate(['/contact-list'])
            },
            error: (error) => alert('Please contact admin.')
        })
    }
    loginWithFacebook(): void {
        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
    signOut(): void {
        this.socialAuthService.signOut();
    }

}
