"use strict";
var requestQ = require("request-promise");
var apiInteractions;
(function (apiInteractions) {
    function getProjects(location) {
        return requestQ(location + "/api/projects", { method: 'GET', json: true });
    }
    apiInteractions.getProjects = getProjects;
    function getAbout(location) {
        return requestQ(location + "/api/about", { method: 'GET', json: true });
    }
    apiInteractions.getAbout = getAbout;
    function getBlog(location) {
        return requestQ(location + "/api/blog", { method: 'GET', json: true });
    }
    apiInteractions.getBlog = getBlog;
})(apiInteractions || (apiInteractions = {}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = apiInteractions;
//# sourceMappingURL=apiInteractions.js.map