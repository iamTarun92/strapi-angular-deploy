import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { ProfileImageEditComponent } from './shared/profile-image-edit/profile-image-edit.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './guard/auth.service';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,

    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule,
        ProfileImageEditComponent
    ],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
