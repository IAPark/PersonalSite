/**
 * Created by Isaac on 8/9/2015.
 */
/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />

import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {RouteParams, Location, Router} from 'angular2/router'

import {Project} from "components/project"

@Component({
    selector: 'projects'
})
@View({
    templateUrl: 'pages/Projects/projects.html',
    directives: [Project]
})
export class Projects{
    path: string;
    projects: JQuery;
    constructor(params: RouteParams, location: Location, router: Router) {
        let html_body = $("html, body");

        if(params.params && params.get("project")){
            html_body.animate({
                scrollTop: $("#"+params.get("project")).offset().top
            }, 200);
        }

        var current = 0;
        this.projects = $("project");
        $(window).scroll((event) => {
            console.log(this.getActive());
        });
    }

    getActive(): string{
        for(let i = 0; i<this.projects.length; ++i) {
            let element = this.projects[i];
            let top = $(element).offset().top;
            let bottom = top + $($(element).find("div")[0]).height();
            let window_center =  window.innerHeight/2 + $(window).scrollTop();

            console.log(top +" to " + bottom);
            console.log("center: " + window_center);
            if(top < window_center && window_center < bottom){
                return $(element).attr('id');
            }
        }
        return null;
    }
}