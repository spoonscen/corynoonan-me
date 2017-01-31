"use strict";
var React = require("react");
var react_router_1 = require("react-router");
var _ = require("lodash");
exports.onHeaderClick = function (window, hash) { return function () { return _.set(window.location, 'hash', hash); }; };
exports.maybeHeaderLink = function (pathname, hash, window) {
    return pathname === '/'
        ? React.createElement("h1", null, "cory noonan")
        : React.createElement("h1", { className: "header-link", onClick: exports.onHeaderClick(window, hash) }, "cory noonan");
};
function Navigation(props) {
    var pathname = props.pathname;
    return (React.createElement("div", { className: "navigation-container" },
        React.createElement("div", { className: 'full-name-header-container' }, exports.maybeHeaderLink(pathname, '#/', window)),
        React.createElement("div", { className: "navigation" },
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement(react_router_1.Link, { className: pathname === '/projects' ? 'active' : null, to: "projects" }, "projects")),
                React.createElement("li", null,
                    React.createElement("div", { className: "bar" })),
                React.createElement("li", null,
                    React.createElement(react_router_1.Link, { className: pathname === '/blog' ? 'active' : null, to: "blog" }, "blog")),
                React.createElement("li", null,
                    React.createElement("div", { className: "bar" })),
                React.createElement("li", null,
                    React.createElement(react_router_1.Link, { className: pathname === '/about' ? 'active' : null, to: "about" }, "about"))),
            props.children)));
}
exports.Navigation = Navigation;
//# sourceMappingURL=Navigation.js.map