"use strict";
var utils;
(function (utils) {
    function getLink(partialUrl, origin) {
        return partialUrl ? "http://" + origin + "/public" + partialUrl : '';
    }
    utils.getLink = getLink;
})(utils || (utils = {}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = utils;
//# sourceMappingURL=index.js.map