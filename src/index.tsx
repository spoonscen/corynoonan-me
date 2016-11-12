import * as React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { Main } from "./components/Main";

const app = document.getElementById('app')

render((
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>
), app)

            // <IndexRoute component={Home} />
            // <Route path="about" component={About} />
            // <Route path="inbox" component={Inbox} />