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
        <div class="col s12" style="display: flex">
            <div class="col s5 teal z-depth-1 white-text">
                <div class="col s11 offset-l1 white-text bottom-sheet" style="margin-top: 20px">
                    <ng-content select=".project-brief"></ng-content>
                </div>
            </div>
            <div class="col s7 z-depth-2 white">
                <ng-content select=".project-title"></ng-content>
                <ng-content select=".project-summery"></ng-content>
                <ng-content></ng-content>
            </div>
        </div>
    `,
    directives: [NgFor, NgIf]
})
export class Project{}