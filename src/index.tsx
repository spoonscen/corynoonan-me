import * as React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { BlogPage } from './pages/BlogPage'
import { MainPage } from './pages/MainPage'
import { App } from './components/App'
import ProjectsPageContainer  from './pages/ProjectsPageContainer'
import { ResumePage } from './pages/ResumePage'
import './styles/app.scss'
import '../public/assets/vendor/font-awesome-4.7.0/css/font-awesome.min.css'

const app = document.getElementById('app')

export const IndexPage = (
  <div className="index-container">
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainPage} />
        <Route path="blog" component={BlogPage} />
        <Route path="projects" component={ProjectsPageContainer} />
        <Route path="resume" component={ResumePage} />
      </Route>
    </Router>
  </div>
)

render(IndexPage, app)