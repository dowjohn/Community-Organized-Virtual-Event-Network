import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../material/material.module';
import { SubscriberBaseComponent } from './components/base/subscriber-base/subscriber-base.component'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SubscriberBaseComponent,
    ],

    declarations: [SubscriberBaseComponent]
})
export class SharedModule { }
