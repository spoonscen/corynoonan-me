import * as React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import { BlogPage } from './pages/BlogPage'
import { Layout } from "./components/Layout";
import { MainPage } from './pages/MainPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ResumePage } from './pages/ResumePage'


const app = document.getElementById('app')

render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainPage} />
            <Route path="main" component={MainPage} />
            <Route path="blog" component={BlogPage} />
            <Route path="projects" component={ProjectsPage} />
            <Route path="resume" component={ResumePage} />
        </Route>
    </Router>
), app)