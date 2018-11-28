import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    // Хотелось бы также закрыть доступ к popup если пользователь не аутентифицирован
    // подумать как переместить к childrens
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
    }, {
        path: '',
        // canActivate: [AuthGuard],
        children: [
            {
                path: 'girlPath',
                component: ComposeMessageComponent,
                outlet: 'girlOutlet'
            },
            { path: 'login', component: LoginComponent },
            { path: '', redirectTo: '/heroes', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
