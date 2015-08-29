/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/angular2/router.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
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
var Project = (function () {
    function Project() {
    }
    Project = __decorate([
        angular2_1.Component({
            selector: 'project',
            properties: ['time', 'classes']
        }),
        angular2_1.View({
            template: "\n        <div class=\"row\" style=\"display: flex\">\n            <div class=\"col s4 teal z-depth-1 white-text\">\n                <div class=\"col s11 offset-l1 white-text bottom-sheet\" style=\"margin-top: 20px\">\n                    <ng-content select=\".project-brief\"></ng-content>\n                </div>\n            </div>\n            <div class=\"col s8 z-depth-2 white\">\n                <ng-content select=\".project-title\"></ng-content>\n                <ng-content select=\".project-summery\"></ng-content>\n                <ng-content></ng-content>\n            </div>\n        </div>\n    ",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], Project);
    return Project;
})();
exports.Project = Project;
//# sourceMappingURL=project.js.map