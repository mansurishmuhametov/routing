import { Component, OnInit, Input } from '@angular/core';

import { Head } from './model/head';

import * as _ from 'lodash';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @Input() heads: any[];
    @Input() body: object;
    @Input() config: any;

    bodyStyle: object;
    headStyle: object;

    constructor() { }

    ngOnInit() {
        this.initHeads();
        this.initConfig();
    }

    initHeads() {
        _.forEach(this.heads, item => {
            item.style = {
                width: item.width
            };
        });
    }

    initConfig() {
        this.bodyStyle = {
            height: this.config.height
        };
    }
}
