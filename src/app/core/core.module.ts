import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { ComposeMessageComponent } from '@app-core/compose-message/compose-message.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        FormsModule
    ],
    declarations: [
        ComposeMessageComponent,
        HeaderComponent
    ],
    exports: [
        ComposeMessageComponent,
        HeaderComponent
    ]
})
export class CoreModule { }
