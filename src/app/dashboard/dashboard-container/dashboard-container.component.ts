import { Component, OnInit } from '@angular/core';
import { SubscriberBaseComponent } from '../../shared/components/base/subscriber-base/subscriber-base.component';
import { BasicCardData } from '../../shared/models/model';
const me: String = "https://media.licdn.com/dms/image/C4E03AQHCbce9aSvF2A/profile-displayphoto-shrink_200_200/0?e=1578528000&v=beta&t=72dqqDrj35BXoD3pyiviUgYxXtRTZSh4dixy4HKdPPw" // me
@Component({
    selector: 'dashboard-container',
    templateUrl: './dashboard-container.component.html',
    styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent extends SubscriberBaseComponent implements OnInit {
    cardDatas: BasicCardData[] = [
        {
            headerImage: me,
            headerTitle: "Great things incoming!",
            cardMainImage: "https://upload.wikimedia.org/wikipedia/commons/a/a9/GrizzlyBearJeanBeaufort.jpg",
            cardMainImageAltText: "image of grizzly bear",
            cardTextBody: `nothing works yet but it might soon`
        }
    ]
    constructor() {
        super()
    }

    ngOnInit() {
    }
}
