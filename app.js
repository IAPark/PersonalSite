/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/angular2/router.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var main_menu_1 = require("components/main-menu/main-menu");
var Projects_1 = require("pages/Projects/Projects");
var Education_1 = require("pages/Education/Education");
var Home_1 = require("pages/Home/Home");
var thanks_1 = require("pages/thanks");
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            templateUrl: "layout.html",
            directives: [router_1.RouterOutlet, main_menu_1.MainMenu]
        }),
        router_1.RouteConfig([
            { path: '/', component: Home_1.Home, as: 'home' },
            { path: '/education', component: Education_1.Education, as: 'education' },
            { path: '/projects', component: Projects_1.Projects, as: 'projects' },
            { path: '/thanks-for-contacting-me', component: thanks_1.Thanks, as: 'thanks' }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.routerInjectables, angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)]);
//# sourceMappingURL=app.js.map