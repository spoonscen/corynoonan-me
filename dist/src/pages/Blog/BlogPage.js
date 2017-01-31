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
var Navigation_1 = require("../../components/Navigation");
function BlogPage(props) {
    var navigationProps = {
        pathname: props.location.pathname
    };
    return (React.createElement("div", { className: "blog-page-container" },
        React.createElement(Navigation_1.Navigation, __assign({}, navigationProps)),
        React.createElement("div", { className: "blog-page-content" },
            React.createElement("h1", null, "Coming Soon!"))));
}
exports.BlogPage = BlogPage;
//# sourceMappingURL=BlogPage.js.map