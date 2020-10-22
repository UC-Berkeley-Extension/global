System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, CardComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            CardComponent = (function () {
                function CardComponent(elRef) {
                    this.uuid = elRef.nativeElement.id.substring(12);
                    this.element = elRef;
                    this.title = drupalSettings.pdb.configuration[this.uuid].title;
                    this.sub_title = drupalSettings.pdb.configuration[this.uuid].sub_title;
                    this.content = drupalSettings.pdb.configuration[this.uuid].content;
                }
                CardComponent = __decorate([
                    core_1.Component({
                        selector: 'card',
                        templateUrl: './card.component.html',
                        styleUrls: ['style.css'],
                        moduleId: __moduleName,
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)),
                    __metadata("design:paramtypes", [core_1.ElementRef])
                ], CardComponent);
                return CardComponent;
            }());
            exports_1("CardComponent", CardComponent);
        }
    };
});
//# sourceMappingURL=card.component.js.map