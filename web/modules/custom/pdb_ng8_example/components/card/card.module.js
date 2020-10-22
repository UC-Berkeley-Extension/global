System.register(["@angular/core", "../../node_modules/@angular/material/card", "./card.component", "helpers/lazy-load-component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, card_1, card_component_1, lazy_load_component_1, MODULES, DECLARATIONS, CardModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (card_component_1_1) {
                card_component_1 = card_component_1_1;
            },
            function (lazy_load_component_1_1) {
                lazy_load_component_1 = lazy_load_component_1_1;
            }
        ],
        execute: function () {
            MODULES = [card_1.MatCardModule];
            DECLARATIONS = [card_component_1.CardComponent];
            CardModule = (function () {
                function CardModule() {
                }
                CardModule = __decorate([
                    core_1.NgModule({
                        imports: MODULES.slice(),
                        declarations: DECLARATIONS.slice(),
                        exports: DECLARATIONS.slice(),
                        providers: [
                            { provide: lazy_load_component_1.LazyLoadComponent, useValue: card_component_1.CardComponent }
                        ],
                        entryComponents: [
                            card_component_1.CardComponent
                        ]
                    })
                ], CardModule);
                return CardModule;
            }());
            exports_1("CardModule", CardModule);
        }
    };
});
//# sourceMappingURL=card.module.js.map