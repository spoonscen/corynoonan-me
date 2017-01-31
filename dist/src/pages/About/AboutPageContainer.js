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
var AboutPage_1 = require("./AboutPage");
var AboutPageContainer = (function (_super) {
    __extends(AboutPageContainer, _super);
    function AboutPageContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            about: null,
            err: null
        };
        return _this;
    }
    AboutPageContainer.prototype.componentDidMount = function () {
        var _this = this;
        var location = _.get(window, 'location.origin');
        return apiInteractions_1.default.getAbout(location)
            .then(function (response) {
            _this.setState({ about: response.data.about });
        })
            .catch(function (err) { return _this.setState({ err: err }); });
    };
    AboutPageContainer.prototype.render = function () {
        var props = this.props;
        var aboutPageProps = _.extend(this.state, props);
        return React.createElement(AboutPage_1.AboutPage, __assign({}, aboutPageProps));
    };
    return AboutPageContainer;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AboutPageContainer;
//# sourceMappingURL=AboutPageContainer.js.map