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
var BlogPage_1 = require("./BlogPage");
var BlogPageContainer = (function (_super) {
    __extends(BlogPageContainer, _super);
    function BlogPageContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            posts: null,
            err: null
        };
        return _this;
    }
    BlogPageContainer.prototype.componentDidMount = function () {
        var _this = this;
        var location = _.get(window, 'location.origin');
        return apiInteractions_1.default.getBlog(location)
            .then(function (response) {
            _this.setState({ posts: response.data.posts });
        })
            .catch(function (err) { return _this.setState({ err: err }); });
    };
    BlogPageContainer.prototype.render = function () {
        var props = this.props;
        var blogPageProps = _.extend(this.state, props);
        return React.createElement(BlogPage_1.BlogPage, __assign({}, blogPageProps));
    };
    return BlogPageContainer;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogPageContainer;
//# sourceMappingURL=BlogPageContainer.js.map