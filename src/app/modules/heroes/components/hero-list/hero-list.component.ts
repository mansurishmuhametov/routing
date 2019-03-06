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
    heads: object[];
    heroes: Hero[];
    tableConfig: object;

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

        this.initTable();
    }

    refreshHeroes() {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    goToHeroDetail(heroId: number) {
        this.router.navigate(['/heroes', heroId]);
    }

    initTable() {
        this.initHeads();
        this.initConfig();
    }

    initHeads() {
        this.heads = [
            {
                name: '',
                match: 'id',
                width: '200px',
            },
            {
                name: 'Название',
                match: 'name',
                width: '200px',
            },
            {
                name: 'Сила',
                match: 'power',
                width: '200px',
            }
        ];
    }

    initConfig() {
        this.tableConfig = {
            height: '200px'
        };
    }
}
