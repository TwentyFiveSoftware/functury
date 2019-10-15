import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './style/index.css';

import IMG_linearFunction from './assets/linear_function.png';

import FrontPage from './pages/FrontPage';
import FunctionPage from './pages/FunctionPage';

import LinearFunction from './pages/LinearFunction';

export default class App extends Component {
    state = {
        functions: [
            {
                id: 'linear-function',
                name: 'Lineare Funktionen',
                image: IMG_linearFunction,
                grade: 8,
                content: <LinearFunction />
            }
        ]
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={props => <FrontPage functions={this.state.functions} {...props} />} />
                    <Route path='/function/:id' component={props => <FunctionPage functions={this.state.functions} {...props} />} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        );
    }
}
