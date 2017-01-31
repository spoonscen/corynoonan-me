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
var _ = require("lodash");
var Project_1 = require("./Project");
function ProjectsPage(props) {
    var navigationProps = {
        pathname: props.location.pathname
    };
    var projects = _.get(props, 'projects', []);
    return (React.createElement("div", { className: "projects-page-container" },
        React.createElement(Navigation_1.Navigation, __assign({}, navigationProps)),
        React.createElement("div", { className: "projects-content" }, _.map(projects, function (project) { return React.createElement(Project_1.default, __assign({ key: project.title }, project)); }))));
}
exports.ProjectsPage = ProjectsPage;
//# sourceMappingURL=ProjectsPage.js.map