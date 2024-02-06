import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
import { Footer } from 'app/models/sidebar-menu';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerData: Footer
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMenus().subscribe({
      next: (response) => {
        this.footerData = response.data.attributes.footer
      }
    })
  }

}
