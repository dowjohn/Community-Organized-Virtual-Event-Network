import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'subscriber-base',
    templateUrl: './subscriber-base.component.html',
    styleUrls: ['./subscriber-base.component.scss']
})

export class SubscriberBaseComponent implements OnDestroy {
    subscriptions: Subscription[] = [];

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
