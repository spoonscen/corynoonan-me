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
var CopyToClipboard = require('react-copy-to-clipboard');
var ReactTooltip = require('react-tooltip');
function AboutPage(props) {
    var navigationProps = {
        pathname: props.location.pathname
    };
    var email = _.get(props, 'about.email', '');
    var interests = _.get(props, 'about.interests', []);
    var technicalRoles = _.get(props, 'about.technicalRoles', []);
    var languages = _.get(props, 'about.technicalSkills.languages', []);
    var frameWorks = _.get(props, 'about.technicalSkills.frameWorks', []);
    var otherTechnologies = _.get(props, 'about.technicalSkills.otherTechnologies', []);
    return (React.createElement("div", { className: "about-page-container" },
        React.createElement(Navigation_1.Navigation, __assign({}, navigationProps)),
        React.createElement("div", { className: "about-content" },
            React.createElement("div", { className: "about-header-container" },
                React.createElement("h1", { className: "about-header" }, "Full Stack Engineer"),
                React.createElement("h3", null,
                    React.createElement(CopyToClipboard, { text: email },
                        React.createElement("span", { className: "about-link", "data-tip": "Click to copy to the clipboard!" },
                            React.createElement("i", { className: "fa fa-at", "aria-hidden": "true" }))),
                    React.createElement(ReactTooltip, { effect: "solid", place: "right", offset: { top: -20, right: 28 } }),
                    React.createElement("a", { target: "_blank", className: "about-link github", href: "https://github.com/spoonscen" },
                        React.createElement("i", { className: "fa fa-github", "aria-hidden": "true" })),
                    React.createElement("a", { target: "_blank", className: "about-link linkedin", href: "https://www.linkedin.com/in/cory-noonan-b6251199" },
                        React.createElement("i", { className: "fa fa-linkedin", "aria-hidden": "true" })))),
            React.createElement("div", { className: "about-details-container" },
                React.createElement("div", { className: "about-details-technical-rolls" },
                    React.createElement("h3", { className: "details-title" }, "Roles"),
                    React.createElement("span", { className: "details" }, _.join(technicalRoles, ', '))),
                React.createElement("div", { className: "about-details-technical-skills-languages" },
                    React.createElement("h3", { className: "details-title" }, "Languages"),
                    React.createElement("span", { className: "details" }, _.join(languages, ', '))),
                React.createElement("div", { className: "about-details-technical-skills-frameworks" },
                    React.createElement("h3", { className: "details-title" }, "Frameworks"),
                    React.createElement("span", { className: "details" }, _.join(frameWorks, ', '))),
                React.createElement("div", { className: "about-details-technical-skills-other-technologies" },
                    React.createElement("h3", { className: "details-title" }, "Tools"),
                    React.createElement("span", { className: "details" }, _.join(otherTechnologies, ', '))),
                React.createElement("div", { className: "about-details-interests" },
                    React.createElement("h3", { className: "details-title" }, "Interests"),
                    React.createElement("span", { className: "details" }, _.join(interests, ', ')))))));
}
exports.AboutPage = AboutPage;
//# sourceMappingURL=AboutPage.js.map