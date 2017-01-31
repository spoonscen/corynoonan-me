"use strict";
var React = require("react");
var react_dom_1 = require("react-dom");
var react_router_1 = require("react-router");
var BlogPageContainer_1 = require("./pages/Blog/BlogPageContainer");
var MainPage_1 = require("./pages/MainPage");
var ProjectsPageContainer_1 = require("./pages/Projects/ProjectsPageContainer");
var AboutPageContainer_1 = require("./pages/About/AboutPageContainer");
require("./styles/app.scss");
require("../public/assets/vendor/font-awesome-4.7.0/css/font-awesome.min.css");
var app = document.getElementById('app');
function RootApp(props) {
    return (React.createElement("div", { className: "root-app" },
        React.createElement(react_router_1.Link, { key: "main", to: "main" }),
        React.createElement(react_router_1.Link, { key: "projects", to: "projects" }),
        React.createElement(react_router_1.Link, { key: "blog", to: "blog" }),
        React.createElement(react_router_1.Link, { key: "about", to: "about" }),
        props.children));
}
exports.RootApp = RootApp;
exports.IndexPage = (React.createElement("div", { className: "index-container" },
    React.createElement(react_router_1.Router, { history: react_router_1.hashHistory },
        React.createElement(react_router_1.Route, { path: "/", component: RootApp },
            React.createElement(react_router_1.IndexRoute, { component: MainPage_1.MainPage }),
            React.createElement(react_router_1.Route, { path: "blog", component: BlogPageContainer_1.default }),
            React.createElement(react_router_1.Route, { path: "projects", component: ProjectsPageContainer_1.default }),
            React.createElement(react_router_1.Route, { path: "about", component: AboutPageContainer_1.default })))));
react_dom_1.render(exports.IndexPage, app);
//# sourceMappingURL=index.js.map