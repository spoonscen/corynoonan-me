import * as React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { BlogPage } from './pages/BlogPage'
import { MainPage } from './pages/MainPage'
import { App } from './components/App'
import { ProjectsPage } from './pages/ProjectsPage'
import { ResumePage } from './pages/ResumePage'
require('./styles/app.scss')

const app = document.getElementById('app')

export const IndexPage = (
  <div className="index-container">
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainPage} />
        <Route path="blog" component={BlogPage} />
        <Route path="projects" component={ProjectsPage} />
        <Route path="resume" component={ResumePage} />
      </Route>
    </Router>
  </div>
)

render(IndexPage, app)