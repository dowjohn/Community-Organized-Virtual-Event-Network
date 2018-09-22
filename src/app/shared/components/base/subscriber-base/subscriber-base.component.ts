import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'subscriber-base',
    templateUrl: './subscriber-base.component.html',
    styleUrls: ['./subscriber-base.component.scss']
})

export class SubscriberBaseComponent implements OnDestroy {
    subscriptions: Subscription[] = [];

    /** Add a subscription to the base array */
    sub(subscription: Subscription) {
        this.subscriptions.push(subscription);
    }

    /** Unsubs all subs */
    unsubAll() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    ngOnDestroy() {
        this.unsubAll();
    }
}
