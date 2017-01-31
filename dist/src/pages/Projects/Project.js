"use strict";
var React = require("react");
var _ = require("lodash");
var utils_1 = require("../../utils");
function Project(props) {
    var title = props.title, link = props.link, github = props.github, details = props.details, description = props.description, imageLinks = props.imageLinks;
    var images = _.map(imageLinks, function (imageLink) { return (React.createElement("a", { key: utils_1.default.getLink(imageLink, window.location.host), target: "_blank", href: link },
        React.createElement("img", { className: "project-image", src: utils_1.default.getLink(imageLink, window.location.host) || '' }))); });
    return (React.createElement("div", { className: "project", key: title },
        React.createElement("div", { className: "project-image-container" }, images),
        React.createElement("div", { className: "project-info-container" },
            React.createElement("h1", { className: "project-title" }, title || ''),
            React.createElement("div", { className: "project-link-container" },
                React.createElement("a", { target: "_blank", className: "project-link githib", href: github || '' },
                    React.createElement("i", { className: "fa fa-github", "aria-hidden": "true" })),
                link ? React.createElement("a", { target: "_blank", className: "project-link website", href: link },
                    React.createElement("i", { className: "fa fa-link", "aria-hidden": "true" })) : null),
            React.createElement("h3", { className: "project-details" }, details || ''),
            React.createElement("div", { className: "project-description" }, (description || '').split('\n').map(function (text) { return React.createElement("p", { className: "project-description-paragraph", key: text },
                text,
                React.createElement("br", null)); })))));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Project;
//# sourceMappingURL=Project.js.map