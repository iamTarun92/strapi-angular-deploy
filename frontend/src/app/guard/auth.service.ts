import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    // private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    // public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

    private isAuthenticated = false;

    login() {
        // Perform authentication logic
        // this.isAuthenticatedSubject.next(true);
        this.isAuthenticated = true;
    }

    logout() {
        // Perform logout logic
        // this.isAuthenticatedSubject.next(false);
        this.isAuthenticated = false;
    }

    isLoggedIn(): boolean {
        // return this.isAuthenticatedSubject.value;
        return this.isAuthenticated;
    }
}
