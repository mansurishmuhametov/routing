import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroService } from './hero.service';
import { MessageService } from '../message.service';

@NgModule({
    imports: [
        CommonModule,
        HeroesRoutingModule,
        FormsModule
    ],
    declarations: [
        HeroListComponent,
        HeroDetailComponent
    ],
    providers: [
        HeroService,
        MessageService
    ]
})
export class HeroesModule { }
