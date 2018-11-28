import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanDeactivate } from '@angular/router';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CrisisDetailComponent> {
    canDeactivate(
        component: CrisisDetailComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        console.log(route.paramMap.get('id'));
        console.log(state.url);

        if (!component.crisis || component.crisis.name === component.editName) {
            return true;
        }

        return component.dialogService.confirm('Discard changes?');
    }
}
