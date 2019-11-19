import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import './style/index.css';

import { ReactComponent as LinearFunctionSVG } from './assets/linear-function.svg';
import FrontPage from './pages/FrontPage';
import FunctionPage from './pages/FunctionPage';
import LinearFunction from './functions/LinearFunction';

// GOOGLE ANALYTICS
ReactGA.initialize('UA-152951051-1');
ReactGA.pageview('/');
//

export default class App extends Component {
    state = {
        functions: [
            {
                id: 'linear-function',
                name: 'Lineare Funktionen',
                func: 'y = mx + t',
                svg: <LinearFunctionSVG />,
                grade: 8,
                tabs: LinearFunction
            }
        ]
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={props => <FrontPage functions={this.state.functions} {...props} />} />
                    <Route path='/function/:id' component={props => <FunctionPage functions={this.state.functions} {...props} />} />
                    <Redirect to='/' />
                </Switch>
            </Router>
        );
    }
}
