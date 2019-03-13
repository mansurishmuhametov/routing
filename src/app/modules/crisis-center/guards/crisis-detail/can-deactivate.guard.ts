import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanDeactivate } from '@angular/router';
import { CrisisDetailComponent } from '@app-modules/crisis-center/components/crisis-detail/crisis-detail.component';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateCrisisDetailComponentGuard implements CanDeactivate<CrisisDetailComponent> {
    canDeactivate(
        component: CrisisDetailComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        if (this.isChanged(component)) {
            return component.dialogService.confirm('Discard changes ?');
        }

        return true;
    }

    isChanged(component) {
        return (component.crisis && component.crisis.name !== component.editName);
    }
}
