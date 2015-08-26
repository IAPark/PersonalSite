/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/angular2/router.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />

import {Component, View, NgFor, NgIf} from 'angular2/angular2';


@Component({
    selector: 'project',
    properties: ['time', 'classes']
})
@View({
    template: `
        <div class="row z-depth-2 teal">
            <div class="col s4">
                 <ng-content select=".project-brief"></ng-content>
            </div>
            <div class="col s8  z-depth-1 white">
                <ng-content select=".project-title"></ng-content>
                <ng-content select=".project-summery"></ng-content>
                <ng-content></ng-content>
            </div>
        </div>
    `,
    directives: [ NgFor, NgIf]
})
export class Project{}