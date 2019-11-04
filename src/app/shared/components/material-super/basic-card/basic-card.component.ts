import { Component, OnInit, Input } from '@angular/core';
import { BasicCardData } from '../../../models/model'
@Component({
  selector: 'basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnInit {
    @Input() cardData: BasicCardData

    constructor() { }

    ngOnInit() {
    }

}
