import { CommonModule } from '@angular/common';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app-shared/shared.module';

import { CrisisDetailResolverService } from './guards/crisis-detail/crisis-detail-resolver.service';
import { CrisisService } from './services/crisis.service';
import { MessageService } from '@app/message.service';

import { CrisisCenterComponent } from './components/crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './components/crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './components/crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
    imports: [
        CommonModule,
        CrisisCenterRoutingModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        CrisisCenterComponent,
        CrisisCenterHomeComponent,
        CrisisDetailComponent,
        CrisisListComponent,
        MessageComponent
    ],
    providers: [
        CrisisDetailResolverService,
        CrisisService,
        MessageService
    ]
})
export class CrisisCenterModule { }
