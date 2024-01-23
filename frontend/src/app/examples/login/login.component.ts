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

    constructor(private apiService: ApiService) { }


    ngOnInit() {
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

}
