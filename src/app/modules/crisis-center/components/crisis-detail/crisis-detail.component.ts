import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Crisis } from '@app-modules/crisis-center/models/crisis';
import { CrisisService } from '@app-modules/crisis-center/services/crisis.service';
import { DialogService } from '@app-shared/services/dialog/dialog.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-crisis-detail',
    templateUrl: './crisis-detail.component.html',
    styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
    crisis$: Observable<Crisis>;
    crisis: Crisis;
    editName: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: CrisisService,
        public dialogService: DialogService
    ) { }

    ngOnInit() {
        this.route.data
            .subscribe((data: { crisis: Crisis }) => {
                if (!data.crisis) {
                    return;
                }
                this.editName = data.crisis.name;
                this.crisis = data.crisis;
            }
        );
    }

    goToCrises(crisis: Crisis) {
        const crisisId = crisis ? crisis.id : null;
        this.router.navigate(['../', { id: crisisId, foo: 'foo'}], { relativeTo: this.route });
    }

    cancel() {
        this.goToCrises(null);
    }

    save() {
        this.goToCrises(null);
    }
}
