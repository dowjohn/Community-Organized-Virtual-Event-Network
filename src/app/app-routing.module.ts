import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule'
    },
    // example of guarded component
    // {
    //     path: 'about',
    //     component: AboutComponent,
    //     canActivate: [
    //         IsLoggedGuard,
    //     ]
    // }

    // example of lazy loaded module
    // {
    //     path: 'breweries',
    //     loadChildren: '../moduleDirectoryName/brewery.module#BreweryModule'
    // }
    {
        path: '**',
        redirectTo: '/404',
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
