import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthModule } from '@app-modules/auth/auth.module';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '@app-shared/shared.module';

import { ComposeMessageComponent } from '@app-core/components/compose-message/compose-message.component';
import { PageNotFoundComponent } from '@app/core/components/page-not-found/page-not-found.component';
import { HeaderComponent } from '@app-core/components/header/header.component';

@NgModule({
    imports: [
        AuthModule,
        CommonModule,
        CoreRoutingModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        ComposeMessageComponent,
        PageNotFoundComponent,
        HeaderComponent
    ],
    exports: [
        ComposeMessageComponent,
        HeaderComponent
    ]
})
export class CoreModule { }
