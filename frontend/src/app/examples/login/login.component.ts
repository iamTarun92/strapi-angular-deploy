import { SocialUser, SocialAuthService, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
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

    constructor(private apiService: ApiService, private socialAuthService: SocialAuthService
    ) { }


    ngOnInit() {
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

    loginWithFacebook(): void {
        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
    signOut(): void {
        this.socialAuthService.signOut();
    }

}
