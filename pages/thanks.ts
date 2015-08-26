/**
 * Created by Isaac on 8/9/2015.
 */
/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/angular2/router.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />

import {Component, View, NgFor, NgIf} from 'angular2/angular2';

@Component({
    selector: 'thanks'
})
@View({
    template: `
<div class="row" style="width: 100%">
        <div class="col s4 offset-s4 z-depth-2 row" style="padding: 20px; margin-top: 20px;">
                <h3 class="center-align">Thanks so Much</h3>
                <p>
                    I'll get back to you soon. I really appreciate you reaching out to me.
                </p>
        </div>
</div>
`
})
export class Thanks{
    constructor() {
    }
}
