import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './auth/auth.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';

import { AuthService } from './auth/auth.service';

@NgModule({
    imports: [
        AdminModule,
        AuthModule,
        BrowserModule,
        BrowserAnimationsModule,
        CrisisCenterModule,
        FormsModule,
        HeroesModule,
        // AppRoutingModule have to be the last
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ComposeMessageComponent,
        PageNotFoundComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        CanDeactivateGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
