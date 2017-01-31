"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var apiInteractions_1 = require("../../apiInteractions/apiInteractions");
var _ = require("lodash");
var ProjectsPage_1 = require("./ProjectsPage");
var ProjectPageContainer = (function (_super) {
    __extends(ProjectPageContainer, _super);
    function ProjectPageContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            projects: null,
            err: null
        };
        return _this;
    }
    ProjectPageContainer.prototype.componentDidMount = function () {
        var _this = this;
        var location = _.get(window, 'location.origin');
        return apiInteractions_1.default.getProjects(location)
            .then(function (response) {
            _this.setState({ projects: response.data.projects });
        })
            .catch(function (err) { return _this.setState({ err: err }); });
    };
    ProjectPageContainer.prototype.render = function () {
        var props = this.props;
        var projectPageProps = _.extend(this.state, props);
        return React.createElement(ProjectsPage_1.ProjectsPage, __assign({}, projectPageProps));
    };
    return ProjectPageContainer;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProjectPageContainer;
//# sourceMappingURL=ProjectsPageContainer.js.map