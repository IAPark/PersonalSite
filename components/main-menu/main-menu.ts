/**
 * Created by Isaac on 8/9/2015.
 */
/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />

import {Component, View, NgFor, NgIf} from 'angular2/angular2';

import {RouterLink, Router, RouteRegistry} from 'angular2/router';

@Component({
    selector: 'main-menu'
})
@View({
    templateUrl: 'components/main-menu/main-menu.html',
    directives: [RouterLink, NgFor, NgIf]
})
export class MainMenu{
    links: Array<{component: string, text: string}>;
    title: string;
    button_collapse: JQuery;
    constructor(private router: Router) {
        this.button_collapse = $(".button-collapse");
        this.button_collapse.sideNav();
        this.title = "Isaac Park";
        this.links = [
            {
                component: "/home",
                text: "Home",
            },
            {
                component: "/education",
                text: "Education",
            },
            {
                component: "/projects",
                text: "Projects",
            }
        ];
    }
    toggle() {
        this.button_collapse.click();
    }

    class_for_link(link): string {
        let path = this.router._currentInstruction.component._recognizer.path;
        if(path === '/') {
            path = '/home'
        }
        if(path === link.component) {
            return "active";
        } else{
            return "";
        }
    }
}