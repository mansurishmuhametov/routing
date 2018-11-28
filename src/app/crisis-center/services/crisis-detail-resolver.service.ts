import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { EmptyObservable } from 'rxjs/observable/emptyObservable';
import { mergeMap, take } from 'rxjs/operators';

import { CrisisService } from './crisis.service';
import { Crisis } from '../models/crisis';

@Injectable()
export class CrisisDetailResolverService implements Resolve<Crisis> {
    constructor(private cs: CrisisService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> | Observable<never> {
        const id = +route.paramMap.get('id');

        return this.cs.getCrisis(id).pipe(
            take(1),
            mergeMap(crisis => {
                if (crisis) {
                    return of(crisis);
                } else {
                    this.router.navigate(['/crisis-center']);
                    return of(null);
                }
            })
        );
    }
}
