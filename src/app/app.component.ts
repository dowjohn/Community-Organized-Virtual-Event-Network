import { Component, OnInit, ViewChild } from '@angular/core'
import { MediaService } from './shared/services/media.service'
import { SubscriberBaseComponent } from './shared/components/base/subscriber-base/subscriber-base.component'
import { MatSidenav } from '@angular/material/sidenav'
import { NavigationLink } from './interface/navigation'

const navigationLinks: NavigationLink[] = [
    {
        path: '/dashboard',
        code: 'dashboard',
        enabled: true,
        show: true,
        title: 'dashboard',
        icon: 'create'
    },
    {
        path: '/contact',
        code: 'contact',
        enabled: true,
        show: true,
        title: 'contact',
        icon: 'create'
    },
]

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends SubscriberBaseComponent implements OnInit {
    title = 'portfolio'
    isMobile = false
    navigationLinks: NavigationLink[] = navigationLinks

    @ViewChild('sidenav') sidenav: MatSidenav

    constructor(public mediaService: MediaService) {
        super()
    }

    ngOnInit() {
        this.sub(this.mediaService.isMobile.subscribe(is => this.isMobile = is))
    }
}
