import { Component, OnInit } from '@angular/core'
import { MediaService } from './shared/services/media.service'
import { SubscriberBaseComponent } from './shared/components/base/subscriber-base/subscriber-base.component'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends SubscriberBaseComponent implements OnInit {
    title = 'brewerybuddy'

    constructor(public mediaService: MediaService) {
        super()
    }

    ngOnInit() {
        this.mediaService.isHandset.subscribe(isHandset => console.log(isHandset));
    }
}
