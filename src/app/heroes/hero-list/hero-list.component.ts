import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
    heroes$: Observable<Hero[]>;
    selectedId: number;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.heroes$ = this.route.paramMap.pipe(
            switchMap(params => {
                this.selectedId = +params.get('id');
                return this.heroService.getHeroes();
            })
        );
    }

    onSelect(hero: Hero): void {
        this.router.navigate(['/hero', hero.id]);
    }
}
