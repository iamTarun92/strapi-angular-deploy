import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
import { About, Hero, Team } from 'app/models/landing-page';
import { Footer } from 'app/models/sidebar-menu';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;
  heroSection: Hero
  aboutSection: About
  teamSection: Team
  footerSection: Footer
  loaded = false

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getLandingData().subscribe({
      next: (response) => {
        this.heroSection = response.data.attributes.hero
        this.aboutSection = response.data.attributes.about
        this.teamSection = response.data.attributes.team
        this.teamSection = response.data.attributes.team
      }
    })
    this.apiService.getMenus().subscribe({
      next: (response) => {
        this.footerSection = response.data.attributes.footer
      }
    })

    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
