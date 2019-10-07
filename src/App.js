import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './style/index.css';

import Panel from './components/Panel';
import IMG_linearFunction from './assets/linear_function.png';

import FrontPage from './FrontPage';
import FunctionPage from './FunctionPage';

export default class App extends Component {
    state = {
        functions: [
            {
                id: 'linear-function',
                name: 'Lineare Funktionen',
                image: IMG_linearFunction,
                grade: 8,
                content: (
                    <Panel classes={['headline']}>Lineare Funktionen</Panel>
                )
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
