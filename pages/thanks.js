/**
 * Created by Isaac on 8/9/2015.
 */
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
var Thanks = (function () {
    function Thanks() {
    }
    Thanks = __decorate([
        angular2_1.Component({
            selector: 'thanks'
        }),
        angular2_1.View({
            template: "\n<div class=\"row\" style=\"width: 100%\">\n        <div class=\"col s4 offset-s4 z-depth-2 row\" style=\"padding: 20px; margin-top: 20px;\">\n                <h3 class=\"center-align\">Thanks so Much</h3>\n                <p>\n                    I'll get back to you soon. I really appreciate you reaching out to me.\n                </p>\n        </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], Thanks);
    return Thanks;
})();
exports.Thanks = Thanks;
//# sourceMappingURL=thanks.js.map