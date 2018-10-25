import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;
    @Input() hero$: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService
    ) { }

    ngOnInit() {
        this.initSubscribers();
    }

    initSubscribers() {
        const self = this;

        this.route.params.subscribe((routeParams) => {
            self.heroSelectedHandler(routeParams);
        });
    }

    heroSelectedHandler(routeParams) {
        const heroId = +routeParams.id;

        this.service.getHero(heroId).subscribe((hero) => this.hero = hero);
    }
}
