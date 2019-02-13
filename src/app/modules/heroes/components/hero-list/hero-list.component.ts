import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
    selectedId: number;
    heroes: Hero[];

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.paramMap
            .subscribe(params => {
                this.selectedId = +params.get('id');
                this.refreshHeroes();
            }
        );
    }

    refreshHeroes() {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    goToHeroDetail(heroId: number) {
        this.router.navigate(['/heroes', heroId]);
    }
}
