/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/angular2/router.d.ts" />

import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {
    RouterLink,
    RouteConfig,
    Router,
    Route,
    RouterOutlet,
    Location,
    RouteParams,
    RootRouter,
    Pipeline,
    routerInjectables,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';
import {MainMenu} from "components/main-menu/main-menu"
import {Projects} from "pages/Projects/Projects"
import {Education} from "pages/Education/Education"
import {Home} from "pages/Home/Home"
import {Thanks} from "pages/thanks"

@Component({
    selector: 'app'
})
@View({
    templateUrl: "layout.html",
    directives: [RouterOutlet, MainMenu]
})
@RouteConfig([
    { path: '/', component: Home, as: 'home' },
    { path: '/education', component: Education, as: 'education'},
    { path: '/projects', component: Projects, as: 'projects'},
    { path: '/projects/:project', component: Projects, as: 'project'},
    { path: '/thanks-for-contacting-me', component: Thanks, as: 'thanks'}
])
// main component
class App {}

bootstrap(App,[routerInjectables, bind(LocationStrategy).toClass(HashLocationStrategy)]);