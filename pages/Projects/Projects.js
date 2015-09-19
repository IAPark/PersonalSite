/**
 * Created by Isaac on 8/9/2015.
 */
/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
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
var project_1 = require("components/project");
var Projects = (function () {
    function Projects(params, location, router) {
        var _this = this;
        var html_body = $("html, body");
        if (params.params && params.get("project")) {
            html_body.animate({
                scrollTop: $("#" + params.get("project")).offset().top
            }, 200);
        }
        var current = 0;
        this.projects = $("project");
        $(window).scroll(function (event) {
            console.log(_this.getActive());
        });
    }
    Projects.prototype.getActive = function () {
        for (var i = 0; i < this.projects.length; ++i) {
            var element = this.projects[i];
            var top_1 = $(element).offset().top;
            var bottom = top_1 + $($(element).find("div")[0]).height();
            var window_center = window.innerHeight / 2 + $(window).scrollTop();
            console.log(top_1 + " to " + bottom);
            console.log("center: " + window_center);
            if (top_1 < window_center && window_center < bottom) {
                return $(element).attr('id');
            }
        }
        return null;
    };
    Projects = __decorate([
        angular2_1.Component({
            selector: 'projects'
        }),
        angular2_1.View({
            templateUrl: 'pages/Projects/projects.html',
            directives: [project_1.Project]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, router_1.Location, router_1.Router])
    ], Projects);
    return Projects;
})();
exports.Projects = Projects;
//# sourceMappingURL=Projects.js.map