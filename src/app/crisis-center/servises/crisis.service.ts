import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Crisis } from '../models/crisis';
import { Crises } from '../models/mock-crises';
import { MessageService } from '../../message.service';

@Injectable()
export class CrisisService {

    constructor(private messageService: MessageService) { }

    getCrises(): Observable<Crisis[]> {
        // TODO: send the message _after_ fetching the crises
        this.messageService.add('CrisisService: fetched crises');
        return of(Crises);
    }

    getCrisis(id: number): Observable<Crisis> {
        // TODO: send the message _after_ fetching the crises
        this.messageService.add('CrisisService: fetched crises');
        const crisis = _.find(Crises, { id: id });

        return of(crisis);
    }
}
