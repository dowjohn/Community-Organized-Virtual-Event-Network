import { Component, Input } from '@angular/core';
import { FormCardData } from '../../../../interface/form';

@Component({
    selector: 'form-card',
    templateUrl: './form-card.component.html',
    styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent {
    @Input() data: FormCardData

    constructor() { }

}
