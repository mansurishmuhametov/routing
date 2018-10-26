import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-crisis-list',
    templateUrl: './crisis-list.component.html',
    styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
    crises$: Observable<Crisis[]>;
    selectedId: number;

    constructor(
        private crisisService: CrisisService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.crises$ = this.route.paramMap.pipe(
            switchMap(params => {
                this.selectedId = +params.get('id');
                return this.crisisService.getCrises();
            })
        );
    }

    onSelect(crisis: Crisis): void {
        this.router.navigate(['/crisis', crisis.id]);
    }
}
