import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-crisis-center',
    templateUrl: './crisis-center.component.html',
    styleUrls: ['./crisis-center.component.css']
})
export class CrisisCenterComponent implements OnInit {

    constructor(private route: Router) { }

    ngOnInit() {
    }

    openMessage() {
        this.route.navigate(['crisis-center', { outlets: { content: ['message'] } }]);
    }
}
