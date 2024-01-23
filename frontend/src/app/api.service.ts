import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { LandingPageRoot } from './models/landing-page';
import { SidebarMenuRoot } from './models/sidebar-menu';
import { LoginRoot } from './models/login';
import { UserRoot } from './models/profile';

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
    const url = '/landing-page?populate[hero][populate]=*&populate[team][populate][header][populate]=*&populate[team][populate][cards][populate]=*&populate[about][populate][header][populate]=*&populate[about][populate][cards][populate]=*&populate[Cta][populate]=*'
    return this.http.get(this.baseUrl + url).pipe(map(data => data as LandingPageRoot))
  }
  getLoginPage(): Observable<LoginRoot> {
    const url = '/login-page?populate[loginForm][populate]=*&populate[bgImage][populate]=*'
    return this.http.get(this.baseUrl + url).pipe(map(data => data as LoginRoot))
  }
  getUserById(id: Number): Observable<UserRoot> {
    const url = `/users/${id}?populate[role][populate]=*&populate[picture]=*&populate[reviews][populate]=*&populate[bookmarks][populate]=*&populate[socialNetworks][populate]=*&populate[profile][populate][header][populate]=*&populate[profile][populate][pictures][populate]=*&populate[profile][populate][bgImage][populate]=*`
    return this.http.get(this.baseUrl + url).pipe(map(data => data as UserRoot))
  }
  addContact(payload: any): Observable<any> {
    const url = '/contact-lists'
    return this.http.post(this.baseUrl + url, payload)
  }
}
