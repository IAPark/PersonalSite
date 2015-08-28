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
var SemesterSummary_1 = require('../../components/SemesterSummary');
var Education = (function () {
    function Education() {
    }
    Education = __decorate([
        angular2_1.Component({
            selector: 'education'
        }),
        angular2_1.View({
            templateUrl: 'pages/Education/education.html',
            directives: [SemesterSummary_1.SemesterSummary]
        }), 
        __metadata('design:paramtypes', [])
    ], Education);
    return Education;
})();
exports.Education = Education;
//# sourceMappingURL=Education.js.map