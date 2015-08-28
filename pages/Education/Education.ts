/**
 * Created by Isaac on 8/9/2015.
 */
/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />

import {Component, View, NgFor, NgIf} from 'angular2/angular2';

import {RouterLink, Router} from 'angular2/router';
import {SemesterSummary} from '../../components/SemesterSummary'

@Component({
    selector: 'education'
})
@View({
    templateUrl: 'pages/Education/education.html',
    directives: [SemesterSummary]
})
export class Education{
    constructor() {
    }
}