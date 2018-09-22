import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCardComponent } from './login-card/login-card.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './auth.routes';
import { SharedModule } from '../shared/shared.module'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    declarations: [LoginCardComponent]
})
export class AuthModule { }
