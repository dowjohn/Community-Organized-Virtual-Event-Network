import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from './contact.routes';
import { SharedModule } from '../shared/shared.module';
import { ContactContainerComponent } from './contact-container/contact-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [ContactContainerComponent]
})
export class ContactModule { }
