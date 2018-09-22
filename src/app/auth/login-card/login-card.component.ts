import { Component, OnInit } from '@angular/core';
import { FormCardData } from '../../interface/form';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
    selector: 'login-card',
    templateUrl: './login-card.component.html',
    styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {
    cardData: FormCardData;

    constructor(public router: Router,
        private fb: FormBuilder) { }

    ngOnInit() {
        this.cardData = this.buildFormData();
    }

    login = () => {
        // TODO login action
        this.router.navigate(['/breweries'])
    }

    cancel = () => {
        // TODO cancel action
        this.router.navigate(['/breweries'])
    }

    buildLoginForm(): FormGroup {
        return this.fb.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    buildFormData(): FormCardData {
        const fg = this.buildLoginForm();
        return {
            title: 'Sign In',
            formGroup: fg,
            controlData: [
                {
                    hint: 'Enter Username',
                    title: 'Username',
                    key: 'login',
                },
                {
                    hint: 'Passwords are great',
                    title: 'Password',
                    key: 'password'
                }
            ],
            submitButtonData: {
                action: this.login,
                title: 'Login'
            },
            cancelButtonData: {
                action: this.cancel,
                title: 'Cancel'
            }
        }

    }

}
