import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
        // canActivate: [
        //     adminGuard
        // ]
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
