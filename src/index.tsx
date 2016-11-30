import * as React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'
import BlogPageContainer from './pages/Blog/BlogPageContainer'
import { MainPage } from './pages/MainPage'
import ProjectsPageContainer from './pages/Projects/ProjectsPageContainer'
import AboutPageContainer from './pages/About/AboutPageContainer'
import './styles/app.scss'
import '../public/assets/vendor/font-awesome-4.7.0/css/font-awesome.min.css'

const app = document.getElementById('app')

export interface RootAppProps {
  children: JSX.Element[]
}

export function RootApp(props: RootAppProps): JSX.Element {
    return (
      <div className="root-app">
        <Link key="main" to="main" />
        <Link key="projects" to="projects" />
        <Link key="blog" to="blog" />
        <Link key="about" to="about" />
        {props.children}
      </div>
    )
}

export const IndexPage = (
  <div className="index-container">
    <Router history={hashHistory}>
      <Route path="/" component={RootApp}>
        <IndexRoute component={MainPage} />
        <Route path="blog" component={BlogPageContainer} />
        <Route path="projects" component={ProjectsPageContainer} />
        <Route path="about" component={AboutPageContainer} />
      </Route>
    </Router>
  </div>
)

render(IndexPage, app)
