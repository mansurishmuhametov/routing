import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrisesRoutingModule } from './crises-routing.module';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

import { CrisisService } from './crisis.service';
import { MessageService } from '../message.service';

@NgModule({
    imports: [
        CommonModule,
        CrisesRoutingModule,
        FormsModule
    ],
    declarations: [
        CrisisListComponent,
        CrisisDetailComponent
    ],
    providers: [
        CrisisService,
        MessageService
    ]
})
export class CrisesModule { }
