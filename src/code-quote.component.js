"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CodeQuoteService = (function () {
    function CodeQuoteService(_jsonp) {
        this._jsonp = _jsonp;
        this.serviceUrl = 'https://codequote.azurewebsites.net/quote';
    }
    CodeQuoteService.prototype.load = function (queryString) {
        // TODO: Validation...
        var url = this.serviceUrl + queryString;
        // Set URLSearchParams()
        return this._jsonp
            .get(url);
    };
    CodeQuoteService = __decorate([
        core_1.Injectable()
    ], CodeQuoteService);
    return CodeQuoteService;
}());
var CodeQuoteComponent = (function () {
    function CodeQuoteComponent(_codeQuoteService) {
        this._codeQuoteService = _codeQuoteService;
    }
    __decorate([
        core_1.Input()
    ], CodeQuoteComponent.prototype, "repo", void 0);
    CodeQuoteComponent = __decorate([
        core_1.Component({
            selector: 'code-quote',
            template: '<pre><code>{{mycode.code}}</code></pre>',
            providers: [CodeQuoteService]
        })
    ], CodeQuoteComponent);
    return CodeQuoteComponent;
}());
exports.CodeQuoteComponent = CodeQuoteComponent;
//# sourceMappingURL=code-quote.component.js.map