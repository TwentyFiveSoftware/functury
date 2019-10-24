import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './style/index.css';

import { ReactComponent as LinearFunctionSVG } from './assets/linear-function.svg';

import FrontPage from './pages/FrontPage';
import FunctionPage from './pages/FunctionPage';

export default class App extends Component {
    state = {
        functions: [
            {
                id: 'linear-function',
                name: 'Lineare Funktionen',
                svg: <LinearFunctionSVG />,
                grade: 8
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
