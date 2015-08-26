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
var SemesterSummery = (function () {
    function SemesterSummery() {
    }
    SemesterSummery = __decorate([
        angular2_1.Component({
            selector: 'semester-summery',
            properties: ['time', 'classes']
        }),
        angular2_1.View({
            template: "\n    <h5 class=\"center\">{{time}}</h5>\n\n    <ul class=\"collapsible popout z-depth-2\" data-collapsible=\"accordion\">\n        <li *ng-for=\"#class of classes\">\n                <div class=\"collapsible-header\">{{class.name}}</div>\n                <div class=\"collapsible-body\">\n                    <p>{{class.description}}</p>\n\n                    <div class=\"extra-info\">\n                        <span>Grade:  <b>{{class.grade}}</b></span>\n                    </div>\n                </div>\n        </li>\n    </ul>\n    ",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], SemesterSummery);
    return SemesterSummery;
})();
exports.SemesterSummery = SemesterSummery;
//# sourceMappingURL=SemesterSummery.js.map