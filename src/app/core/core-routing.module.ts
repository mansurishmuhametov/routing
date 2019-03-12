import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ComposeMessageComponent } from '@app-core/components/compose-message/compose-message.component';
import { LoginComponent } from '@app-modules/auth/components/login/login.component';
import { PageNotFoundComponent } from '@app-core/components/page-not-found/page-not-found.component';

import { AuthGuard } from '@app-modules/auth/guards/auth.guard';
import { SelectivePreloadingStrategyService } from '@app/selective-preloading-strategy.service';

const routes: Routes = [
    // Хотелось бы также закрыть доступ к popup если пользователь не аутентифицирован
    // подумать как переместить к childrens
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
    },
    {
        path: 'admin',
        loadChildren: '@app/modules/admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'crisis-center',
        loadChildren: '@app/modules/crisis-center/crisis-center.module#CrisisCenterModule',
        data: { preload: false }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'heroes',
        loadChildren: '@app/modules/heroes/heroes.module#HeroesModule'
    },
    {
        path: '',
        redirectTo: 'heroes',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                enableTracing: false,
                // preloadingStrategy: PreloadAllModules
                preloadingStrategy: SelectivePreloadingStrategyService
            }
        )
    ],
    exports: [RouterModule],
    providers: [
        SelectivePreloadingStrategyService
    ]
})
export class CoreRoutingModule { }
