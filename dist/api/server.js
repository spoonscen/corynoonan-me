"use strict";
var express = require("express");
var defaultExpressApp = express();
var router_1 = require("./router");
var PORT = process.env.PORT || 7777;
var expressApp;
(function (expressApp) {
    function setupExpress(app, router) {
        app.use('/public', express.static('public'));
        app.use('/dist', express.static('dist'));
        app.use('/node_modules', express.static('node_modules'));
        app.use('/', router);
        app.use('/api/projects', router);
        app.use('/api/blog', router);
        app.use('/api/about', router);
        var server = app.listen(PORT, function () { console.log("corynoonan.me is listening on " + PORT); });
        return server;
    }
    expressApp.setupExpress = setupExpress;
})(expressApp = exports.expressApp || (exports.expressApp = {}));
var server = expressApp.setupExpress(defaultExpressApp, router_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = server;
//# sourceMappingURL=server.js.map