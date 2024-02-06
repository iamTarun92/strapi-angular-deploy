import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
import { Data } from 'app/models/contact-list';

@Component({
  selector: 'contact-lists',
  templateUrl: './contact-lists.component.html',
  styleUrls: ['./contact-lists.component.scss']
})
export class ContactListsComponent implements OnInit {

  allList: Data[]
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    navbar.classList.remove('navbar-transparent');

    this.apiService.getAllContacts()
    this.apiService.getAllContacts().subscribe({
      next: (response) => {
        this.allList = response.data
      }
    })
  }

}
