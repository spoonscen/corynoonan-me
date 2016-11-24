import * as React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { BlogPage } from './pages/BlogPage'
import { MainPage } from './pages/MainPage'
import { Layout } from './components/Layout'
import { ProjectsPage } from './pages/ProjectsPage'
import { ResumePage } from './pages/ResumePage'

const app = document.getElementById('app')

export const IndexPage = (
  <div className="index-container">
    <div className="router">
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <Route path="main" component={MainPage} />
            <Route path="blog" component={BlogPage} />
            <Route path="projects" component={ProjectsPage} />
            <Route path="resume" component={ResumePage} />
        </Route>
      </Router>
    </div>
  </div>
)

render(IndexPage, app)