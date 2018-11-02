import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-crisis-detail',
    templateUrl: './crisis-detail.component.html',
    styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
    crisis$: Observable<Crisis>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: CrisisService
    ) { }

    ngOnInit() {
        this.crisis$ = this.route.params.pipe(
            switchMap((params) => {
                return this.service.getCrisis(+params.id);
            })
        );
    }

    goToCrises(crisis: Crisis) {
        const crisisId = crisis ? crisis.id : null;
        this.router.navigate(['../', { id: crisisId, foo: 'foo'}], { relativeTo: this.route });
    }
}
