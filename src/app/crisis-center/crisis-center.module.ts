import { CommonModule } from '@angular/common';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { MessageComponent } from './message/message.component';

import { CrisisService } from './crisis.service';
import { DialogService } from '../dialog.service';
import { MessageService } from '../message.service';

@NgModule({
    imports: [
        CommonModule,
        CrisisCenterRoutingModule,
        FormsModule
    ],
    declarations: [
        CrisisCenterComponent,
        CrisisCenterHomeComponent,
        CrisisDetailComponent,
        CrisisListComponent,
        MessageComponent
    ],
    providers: [
        CrisisService,
        DialogService,
        MessageService
    ]
})
export class CrisisCenterModule { }
