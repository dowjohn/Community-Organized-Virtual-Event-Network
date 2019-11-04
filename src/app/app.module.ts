import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module'
import { DashboardModule } from './dashboard/dashboard.module';
import { ContactModule } from './contact/contact.module'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // for some reason the order of imports matters, so add new feature modules to the top
        BrowserModule,
        ContactModule,
        DashboardModule,
        SharedModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
