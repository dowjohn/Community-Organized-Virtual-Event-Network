import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from './dashboard.routes';
import { SharedModule } from '../shared/shared.module';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    declarations: [DashboardContainerComponent]
})
export class DashboardModule { }
