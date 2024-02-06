import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { ContactComponent } from './examples/contact/contact.component';
import { ContactListsComponent } from './examples/contact-lists/contact-lists.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: ComponentsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'landing', component: LandingComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
    { path: 'contact-list', component: ContactListsComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
