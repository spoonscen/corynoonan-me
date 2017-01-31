"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var Navigation_1 = require("../components/Navigation");
function MainPage(props) {
    var children = props.children, location = props.location;
    var pathname = location.pathname;
    var navigationProps = { children: children, pathname: pathname };
    return (React.createElement("div", { className: "main-page-container" },
        React.createElement(Navigation_1.Navigation, __assign({}, navigationProps))));
}
exports.MainPage = MainPage;
//# sourceMappingURL=MainPage.js.map