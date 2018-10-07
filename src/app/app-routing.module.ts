import { NgModule } from '@angular/core';
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
    {
        path: 'login',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
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
