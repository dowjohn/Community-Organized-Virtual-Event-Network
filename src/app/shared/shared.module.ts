import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../material/material.module';
import { SubscriberBaseComponent } from './components/base/subscriber-base/subscriber-base.component';
import { BasicCardComponent } from './components/material-super/basic-card/basic-card.component';
import { FormCardComponent } from './components/material-super/form-card/form-card.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        SubscriberBaseComponent,
        BasicCardComponent,
        FormCardComponent
    ],

    declarations: [SubscriberBaseComponent, BasicCardComponent, FormCardComponent]
})
export class SharedModule { }
