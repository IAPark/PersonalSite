/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/angular2/router.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />

import {Component, View, NgFor, NgIf, LifecycleEvent} from 'angular2/angular2';


@Component({
    selector: 'semester-summery',
    properties: ['time', 'classes'],
    lifecycle: [LifecycleEvent.onAllChangesDone, LifecycleEvent.onChange]
})
@View({
    template: `
    <h5 class="center">{{time}}</h5>

    <ul class="collapsible" data-collapsible="accordion">
        <li *ng-for="#class of classes">
                <div class="collapsible-header">{{class.name}}</div>
                <div class="collapsible-body">
                    <p>{{class.description}}</p>

                    <div class="extra-info">
                        <span>Grade:  <b>{{class.grade}}</b></span>
                    </div>
                </div>
        </li>
    </ul>
    `,
    directives: [ NgFor, NgIf]
})
export class SemesterSummery{
    time: string;
    classes: Array<{name: string, description: string, grade: string}>;
    private changing: boolean = false;
    constructor() {
        $(() => {
            $('.collapsible').collapsible({
                accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
            });
        });
    }
    onChange(changes) {
        if(changes["classes"]) {
            this.changing = true;
\        }
    }


    onAllChangesDone() {
        if(this.changing) {
            setTimeout(() => {
                $('.collapsible').collapsible();
            }, 100);
            this.changing = false;

        }
    }
}