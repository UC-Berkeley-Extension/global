System.register(["helpers/globals"], function (exports_1, context_1) {
    "use strict";
    var globals_1, CardGlobals;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (globals_1_1) {
                globals_1 = globals_1_1;
            }
        ],
        execute: function () {
            exports_1("CardGlobals", CardGlobals = globals_1.mergeGlobals({}, []));
        }
    };
});
//# sourceMappingURL=globals.js.map