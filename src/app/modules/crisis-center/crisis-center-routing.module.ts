import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisCenterComponent } from './components/crisis-center/crisis-center.component';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './components/crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './components/crisis-center-home/crisis-center-home.component';
import { MessageComponent } from './components/message/message.component';

import { CanDeactivateGuard } from '@app-core/guards/can-deactivate.guard';
import { CrisisDetailResolverService } from './services/crisis-detail-resolver.service';

const routes: Routes = [
    {
        path: 'home',
        component: CrisisCenterComponent,
        children: [
            {
                path: 'message',
                component: MessageComponent,
                outlet: 'content'
            },
            {
                path: 'list',
                component: CrisisListComponent,
                children: [
                    {
                        path: ':id',
                        component: CrisisDetailComponent,
                        canDeactivate: [CanDeactivateGuard],
                        resolve: {
                            crisis: CrisisDetailResolverService
                        }
                    },
                    {
                        path: '',
                        component: CrisisCenterHomeComponent
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
