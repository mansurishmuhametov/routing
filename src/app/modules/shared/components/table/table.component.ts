import { Component, OnInit, Input } from '@angular/core';

import { Head } from './model/head';
import { ColumnStyle } from './model/columnStyle';

import * as _ from 'lodash';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @Input() heads: Head[];
    @Input() body: object;
    @Input() config: any;

    bodyStyle: object;
    columnsStyles: ColumnStyle[];

    constructor() { }

    ngOnInit() {
        this.initConfig();
        this.initColumnsStyles();
    }

    initConfig() {
        this.bodyStyle = {
            height: this.config.height
        };
    }

    initColumnsStyles() {
        this.columnsStyles = _.map(this.heads, item => {
            const value = {
                width: `${item.width}px`
            };

            return new ColumnStyle(item.match, value);
        });
    }

    getThStyle(match) {
        return this.getColumnStyle(match);
    }

    getTdStyle(match) {
        return this.getColumnStyle(match);
    }

    getColumnStyle(match) {
        // todo: почему это не работает !!!
        // const style2 = _.find(this.columnsStyles, (item: ColumnStyle) => {
        //     if (item.match === match) {
        //         return item;
        //     }
        // });

        // const p = style2.match;

        const style: ColumnStyle = this.columnsStyles.find(item => {
            return item.match === match;
         });

        return style ? style.value : {};
    }
}
