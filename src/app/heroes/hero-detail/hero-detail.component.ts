import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    hero$: Observable<Hero>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService
    ) { }

    ngOnInit() {
        this.hero$ = this.route.params.pipe(
            switchMap((params: ParamMap) => {
                return this.service.getHero(+params.get('id'));
            })
        );
    }

    goToHeroes(hero: Hero) {
        const heroId = hero ? hero.id : null;
        this.router.navigate(['/heroes', { id: heroId, foo: 'foo'}]);
    }
}
