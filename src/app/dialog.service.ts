import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DialogService {

    constructor() { }

    confirm(message?: string): Observable<boolean> {
        const confirmation = window.confirm(message || 'Is it OK?');

        return of(confirmation);
    }
}
