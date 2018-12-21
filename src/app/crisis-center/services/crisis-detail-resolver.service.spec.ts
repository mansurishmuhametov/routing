import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CrisisDetailResolverService } from './crisis-detail-resolver.service';
import { CrisisService } from '@app/crisis-center/services/crisis.service';
import { MessageService } from '@app/message.service';

describe('CrisisDetailResolverService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                CrisisDetailResolverService,
                CrisisService,
                MessageService
            ]
        });
    });

    it('should be created', inject([CrisisDetailResolverService], (service: CrisisDetailResolverService) => {
        expect(service).toBeTruthy();
    }));
});
