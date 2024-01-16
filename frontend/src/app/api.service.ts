import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { LandingPageRoot } from './models/landing-page';
import { SidebarMenuRoot } from './models/sidebar-menu';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:1337/api'
  constructor(private http: HttpClient) { }


  getMenus(): Observable<SidebarMenuRoot> {
    const url = '/global?populate[navigation][populate]=*&populate[footer][populate]=*'
    return this.http.get(this.baseUrl + url).pipe(map(data => data as SidebarMenuRoot))
  }
  getLandingData(): Observable<LandingPageRoot> {
    const url = '/landing-page?populate[hero][populate]=*&populate[team][populate][header][populate]=*&populate[team][populate][cards][populate]=*&populate[about][populate][header][populate]=*&populate[about][populate][cards][populate]=*'
    return this.http.get(this.baseUrl + url).pipe(map(data => data as LandingPageRoot))
  }
}
